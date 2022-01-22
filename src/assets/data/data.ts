import { toast } from "react-toastify";

export const apexState = {
  series: [
    {
      data: [],
    },
  ],
};

export const apiKeys = [
  '787724816ddef5af6399ca6fd5426676',
  '723fc1e7ede6ef4cd39c83b4a5a525b1',
  '19d9ccfec1ff1750e9a69505e4c82203',
];

export const notify = () => toast.error('Please fill full currency codes');

export const index = 2;

export const inputsValidation = /^[a-zA-Z]+$/;

export const timeFrameOptions = ['5min', '10min', '15min', '30min', '1hour', '4hour'];