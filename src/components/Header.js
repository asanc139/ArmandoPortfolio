import NavLinks from './NavLinks';
import logo from '../images/Armando Sanchez-logos.jpeg';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
