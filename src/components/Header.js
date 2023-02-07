import logo from '../images/logo.png';
function Header(props) {
  return (
    <header className='header'>
      <img
        className='header__img'
        src={logo}
        alt='Windbnb logo'
        title='Windbnb'
      />
    </header>
  );
}

export default Header;
