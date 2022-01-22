import { ErrorProps } from '../../assets/types/types';
import './DataError.scss';

const DataError: React.FC<ErrorProps> = ({ errorStatus }) => {
  return (
    <div className="data-error">
      {errorStatus === 403
        ? 'Data request limit reached for today'
        : 'Some kind of data error'}
    </div>
  );
};

export default DataError;
