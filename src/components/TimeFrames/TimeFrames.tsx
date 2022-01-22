import { timeFrameOptions } from '../../assets/data/data';
import { TimeFramesProps } from '../../assets/types/types';
import './TimeFrames.scss';

const TimeFrames: React.FC<TimeFramesProps> = ({ onClick, timeFrame }) => {
  return (
    <div className="time-frame">
      {timeFrameOptions.map((option) => (
        <button
          className={`time-frame__button ${option === timeFrame && 'active'}`}
          onClick={() => onClick(option)}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TimeFrames;
