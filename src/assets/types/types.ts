export type ButtonProps = {
  onClick: () => void;
};

export type HistoricalCharts = {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
};

export type ChartsProps = {
  savedCurrencies: string;
};

export type ErrorProps = {
  errorStatus: number;
};

export type SearchFieldsProps = {
  firstCurrencyValue: string;
  setFirstCurrencyValue: (arr: string) => void;
  secondCurrencyValue: string;
  setSecondCurrencyValue: (arr: string) => void;
};

export type TimeFramesProps = {
  onClick: (arr: string) => void;
  timeFrame: string;
};

export type ViewProps = {
  savedCurrencies: string;
  dataError: boolean;
  setDataError: (arr: boolean) => void;
};

export type CurrencyRate = {
  name: string;
  price: number;
  change: number;
  changesPercentage: number;
};