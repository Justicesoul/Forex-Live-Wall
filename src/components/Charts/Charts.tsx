import './Charts.scss';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TimeFrames from '../TimeFrames/TimeFrames';
import { ChartsProps, HistoricalCharts } from '../../assets/types/types';
import { apexState, apiKeys, index } from '../../assets/data/data';

axios.defaults.baseURL = 'https://financialmodelingprep.com/';

const Charts: React.FC<ChartsProps> = ({ savedCurrencies }) => {
  const [historicalCharts, setHistoricalCharts] = useState<HistoricalCharts[]>(
    []
  );
  const [chartState, setChartState] = useState<ApexOptions>(apexState);
  const [initialState, setInitialState] = useState(true);
  const [timeFrame, setTimeFrame] = useState('15min');

  const clickHandler = (arr: string) => {
    setTimeFrame(arr);
  };

  useEffect(() => {
    axios
      .get(
        `api/v3/historical-chart/${timeFrame}/${savedCurrencies}?apikey=${apiKeys[index]}`
      )
      .then(({ data }) => {
        setHistoricalCharts(data);
      })
      .finally(() => {
        setInitialState(false);
      });

    const timeout = setTimeout(() => {
      const dataHistory = historicalCharts.map(
        ({ date, open, low, high, close }) => {
          return { x: date, y: [open, low, high, close] };
        }
      );
      const dataForRanding = {
        series: [
          {
            data: dataHistory.slice(0, 100).reverse(),
          },
        ],
      };
      setChartState(dataForRanding);
    }, 0);
    return () => clearTimeout(timeout);
  }, [savedCurrencies, initialState, historicalCharts]);

  return (
    <div>
      <TimeFrames onClick={clickHandler} timeFrame={timeFrame} />
      {!initialState && (
        <ReactApexChart
          options={chartState}
          series={chartState.series}
          type="candlestick"
          className="charts"
        />
      )}
    </div>
  );
};

export default Charts;
