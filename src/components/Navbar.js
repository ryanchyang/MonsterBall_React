import './Navbar.scss';
import navbarImage from '../assets/images/header/menu_bg.png';
import navbarLogoMb from '../assets/images/logo_mb.png';
import navbarLogoPc from '../assets/images/logo_pc.png';
import navbarWallet from '../assets/images/header/btn_money.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
        <div className="w-100 d-flex align-items-start">
          {/* logo */}
          <Link to="/#" className="navbar-logo">
            <div className="navbar-logo-mb">
              <img src={navbarLogoMb} alt="logo" />
            </div>
            <div className="navbar-logo-pc">
              <img src={navbarLogoPc} alt="logo" />
            </div>
          </Link>
          {/* navbar pc */}
          <div className="navbar-pc">
            <ul className="w-100 d-flex justify-content-between t-16 font-BoldenVan">
              <li>
                <span>Gamplay</span>
              </li>
              <li>
                <span>Paper</span>
              </li>
              <li>
                <span>Road map</span>
              </li>
              <li>
                <span>NFT item</span>
              </li>
              <li>
                <span>Market</span>
              </li>
              <li>
                <span>DApp</span>
              </li>
              <li>
                <span>Invite</span>
              </li>
              <li>
                <span>Play</span>
              </li>
            </ul>
          </div>
        </div>
        {/* hamburger */}
        <span>
          <GiHamburgerMenu className="icon-hamburger" />
        </span>
        {/* wallet */}
        <div className="navbar-wallet">
          <img src={navbarWallet} alt="icon-wallet" className="" />
        </div>
      </div>
      <div className="navbar-img">
        <img src={navbarImage} alt="navbar_image" className="" />
      </div>
    </header>
  );
};

export default Navbar;
