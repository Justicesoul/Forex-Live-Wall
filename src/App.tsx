import { useState } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import View from './components/View/View';
import SearchFields from './components/SearchFields/SearchFields';
import { Flip, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

const App = () => {
  const [firstCurrencyValue, setFirstCurrencyValue] = useState('');
  const [secondCurrencyValue, setSecondCurrencyValue] = useState('');
  const [savedCurrencies, setSavedCurrencies] = useState('');
  const [dataError, setDataError] = useState(false);

  const notify = () => toast.error('Please fill full currency codes');

  const clickHandler = () => {
    const value = (firstCurrencyValue + secondCurrencyValue).toUpperCase();
    if (value.length !== 6 && !dataError) {
      notify();
    } else {
      setSavedCurrencies(value);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Flip}
          theme={'dark'}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container">
          <SearchFields
            firstCurrencyValue={firstCurrencyValue}
            setFirstCurrencyValue={setFirstCurrencyValue}
            secondCurrencyValue={secondCurrencyValue}
            setSecondCurrencyValue={setSecondCurrencyValue}
          />
          <Button onClick={clickHandler} />
        </div>

        <View
          savedCurrencies={savedCurrencies}
          dataError={dataError}
          setDataError={setDataError}
        />
      </main>
    </>
  );
};

export default App;
