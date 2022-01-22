import { FC } from 'react';
import './DataError.scss';

export type ErrorProps = {
  errorStatus: number;
};

const DataError: FC<ErrorProps> = ({ errorStatus }) => {
  return (
    <div className="data-error">
      {errorStatus === 403
        ? 'Data request limit reached for today'
        : 'Some kind of data error'}
    </div>
  );
};

export default DataError;
