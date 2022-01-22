import { FC } from 'react';
import './Button.scss';

export type ButtonProps = {
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Search
    </button>
  );
};

export default Button;
