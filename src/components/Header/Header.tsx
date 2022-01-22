import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Forex Live Wall</h1>
      <div className="header__container">
        <h2>Powered by</h2>
        <img className="header__logo" src="images/28stone.svg" alt="28stone" />
      </div>
    </header>
  );
};

export default Header;
