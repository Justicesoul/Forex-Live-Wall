import { useEffect, useRef } from 'react';
import { regex } from '../../assets/data/data';
import { SearchFieldsProps } from '../../assets/types/types';
import './SearchFields.scss';

const SearchFields: React.FC<SearchFieldsProps> = ({
  firstCurrencyValue,
  setFirstCurrencyValue,
  secondCurrencyValue,
  setSecondCurrencyValue,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const clickHandler = () => {
    setFirstCurrencyValue(secondCurrencyValue);
    setSecondCurrencyValue(firstCurrencyValue);
  };

  return (
    <div>
      <input
        className="search-field"
        type="text"
        ref={inputEl}
        value={firstCurrencyValue}
        placeholder="e.g. usd"
        title="Only letters are available"
        maxLength={3}
        onChange={(e) => {
          if (e.target.value === '' || regex.test(e.target.value))
            setFirstCurrencyValue(e.target.value);
        }}
      />
      <button
        title="Turn over the currencies"
        className="search-field__turn-over-button"
        onClick={clickHandler}
      >
        ⇄
      </button>
      <input
        className="search-field"
        type="text"
        value={secondCurrencyValue}
        placeholder="e.g. eur"
        title="Only letters are available"
        maxLength={3}
        onChange={(e) => {
          if (e.target.value === '' || regex.test(e.target.value))
            setSecondCurrencyValue(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchFields;
