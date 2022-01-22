export type HistoricalCharts = {
  date: string;
  open: number;
  low: number;
  high: number;
  close: number;
};

export type CurrencyRate = {
  name: string;
  price: number;
  change: number;
  changesPercentage: number;
};