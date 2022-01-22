import { FC } from 'react';
import { timeFrameOptions } from '../../assets/data/data';
import './TimeFrames.scss';

export type TimeFramesProps = {
  onClick: (arr: string) => void;
  timeFrame: string;
};

const TimeFrames: FC<TimeFramesProps> = ({ onClick, timeFrame }) => {
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
