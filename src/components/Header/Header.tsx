import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Forex Live Wall</h1>
      <div className="header__container">
        <h2>Powered by</h2>
        <img
          className="header__logo"
          src="https://icon-library.com/images/icon-forex/icon-forex-10.jpg"
          alt="28stone"
        />
      </div>
    </header>
  );
};

export default Header;
