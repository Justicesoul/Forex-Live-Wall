import { FC, useEffect, useRef } from 'react';
import { inputsValidation } from '../../assets/data/data';
import './SearchFields.scss';

export type SearchFieldsProps = {
  firstCurrencyValue: string;
  onFirstCurrencyValueChange: (arr: string) => void;
  secondCurrencyValue: string;
  onSecondCurrencyValueChange: (arr: string) => void;
};

const SearchFields: FC<SearchFieldsProps> = ({
  firstCurrencyValue,
  onFirstCurrencyValueChange,
  secondCurrencyValue,
  onSecondCurrencyValueChange,
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const clickHandlerTurnOverTickers = () => {
    onFirstCurrencyValueChange(secondCurrencyValue);
    onSecondCurrencyValueChange(firstCurrencyValue);
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
          if (e.target.value === '' || inputsValidation.test(e.target.value))
            onFirstCurrencyValueChange(e.target.value);
        }}
      />
      <button
        title="Turn over the currencies"
        className="search-field__turn-over-button"
        onClick={clickHandlerTurnOverTickers}
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
          if (e.target.value === '' || inputsValidation.test(e.target.value))
            onSecondCurrencyValueChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchFields;
