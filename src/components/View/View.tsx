import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { apiKeys, index } from '../../assets/data/data';
import { CurrencyRate, ViewProps } from '../../assets/types/types';
import Charts from '../Charts/Charts';
import DataError from '../DataError/DataError';
import './View.scss';

axios.defaults.baseURL = 'https://financialmodelingprep.com/';

const View: React.FC<ViewProps> = ({
  savedCurrencies,
  dataError,
  setDataError,
}) => {
  const [currencyPairRate, setCurrencyPairRate] = useState<CurrencyRate[]>([]);
  const [previousPairRate, setPreviousPairRate] = useState(0);
  const [priceColor, setPriceColor] = useState('white');
  const [errorStatus, setErrorStatus] = useState(0);
  const [initialState, setInitialState] = useState(true);

  const prevRateRef = useRef(0);

  const getCurrencyRateData = () => {
    axios
      .get(`api/v3/quote/${savedCurrencies}?apikey=${apiKeys[index]}`)
      .then(({ data }) => {
        setCurrencyPairRate(data);
        setInitialState(false);
      })
      .catch((error) => {
        if (error) {
          setDataError(true);
          setErrorStatus(error.response.status);
          setInitialState(true);
        }
      });
  };

  useEffect(() => {
    if (savedCurrencies) {
      getCurrencyRateData();
    }
  }, [savedCurrencies]);

  useEffect(() => {
    if (currencyPairRate.length > 0 && !initialState) {
      const interval = setInterval(() => {
        getCurrencyRateData();
      }, 10000);

      prevRateRef.current = currencyPairRate[0].price;
      setPreviousPairRate(prevRateRef.current);

      if (previousPairRate < currencyPairRate[0].price) {
        setPriceColor('green');
      } else if (previousPairRate > currencyPairRate[0].price) {
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
              {`${currencyPairRate[0].name}  ${currencyPairRate[0].price}`}
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
          {initialState ? 'Please choose currency pair' : 'Nothing found'}
        </div>
      )}
    </>
  );
};

export default View;
