import axios from 'axios';
import { FC, useEffect, useRef, useState } from 'react';
import { apiKeys, index } from '../../assets/data/data';
import { CurrencyRate } from '../../assets/types/types';
import Charts from '../Charts/Charts';
import DataError from '../DataError/DataError';
import './View.scss';

axios.defaults.baseURL = 'https://financialmodelingprep.com/';

export type ViewProps = {
  savedCurrencies: string;
  dataError: boolean;
  setDataError: (arr: boolean) => void;
};

const View: FC<ViewProps> = ({ savedCurrencies, dataError, setDataError }) => {
  const [currencyPairRate, setCurrencyPairRate] = useState<CurrencyRate[]>([]);
  const [previousPairRate, setPreviousPairRate] = useState(0);
  const [priceColor, setPriceColor] = useState('white');
  const [errorStatus, setErrorStatus] = useState(0);
  const [beforeGetDataState, setbeforeGetDataState] = useState(true);
  const [currencyPairActualPrice, setCurrencyPairActualPrice] = useState(0);

  const prevRateRef = useRef(0);

  const getCurrencyRateData = () => {
    axios
      .get(`api/v3/quote/${savedCurrencies}?apikey=${apiKeys[index]}`)
      .then(({ data }) => {
        setCurrencyPairRate(data);
        setbeforeGetDataState(false);
        setCurrencyPairActualPrice(data[0].price);
      })
      .catch((error) => {
        setDataError(true);
        setErrorStatus(error.response.status);
        setbeforeGetDataState(true);
      });
  };

  useEffect(() => {
    if (savedCurrencies) {
      getCurrencyRateData();
    }
  }, [savedCurrencies]);

  useEffect(() => {
    if (currencyPairRate.length > 0 && !beforeGetDataState) {
      const interval = setInterval(() => {
        getCurrencyRateData();
      }, 10000);

      prevRateRef.current = currencyPairActualPrice;
      setPreviousPairRate(prevRateRef.current);

      if (previousPairRate < currencyPairActualPrice) {
        setPriceColor('green');
      } else if (previousPairRate > currencyPairActualPrice) {
        setPriceColor('red');
      }

      const timeout = setTimeout(() => {
        setPriceColor('white');
      }, 500);
      return () => (clearTimeout(timeout), clearInterval(interval));
    }
  }, [currencyPairRate]);

  return (
    <>
      {dataError ? (
        <DataError errorStatus={errorStatus} />
      ) : currencyPairRate.length > 0 ? (
        <div className="view">
          <div className="view__contanier">
            <div
              className="view__currencies-main-data"
              style={{ backgroundColor: priceColor }}
              title="currency pair"
            >
              {`${currencyPairRate[0].name}  ${currencyPairActualPrice}`}
            </div>
            <div
              className="view__currencies-main-changes"
              style={{
                color: currencyPairRate[0].change < 0 ? 'red' : 'green',
              }}
              title="actual price"
            >{`${currencyPairRate[0].change} (${currencyPairRate[0].changesPercentage}%)`}</div>
          </div>
          <Charts savedCurrencies={savedCurrencies} />
        </div>
      ) : (
        <div className="view__initial-state">
          {beforeGetDataState ? 'Please choose currency pair' : 'Nothing found'}
        </div>
      )}
    </>
  );
};

export default View;
