import { ButtonProps } from '../../assets/types/types';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default Button;
