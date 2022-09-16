import './Navbar.scss';
import navbarImage from '../assets/images/header/menu_bg.png';
import navbarLogo from '../assets/images/logo_mb.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* <div className="navbar-img">
          <img src={navbarImage} alt="navbar_image" className="" />
        </div> */}
      <div className="w-100 d-flex justify-content-between align-items-center px-5">
        <Link to="/">
          <div className="navbar-logo">
            <img src={navbarLogo} alt="logo" />
          </div>
        </Link>
        <span>
          <GiHamburgerMenu className="icon-hamburger" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
