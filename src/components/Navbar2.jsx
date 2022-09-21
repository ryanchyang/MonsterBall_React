import { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import navbarLogoPc from '../assets/images/logo_pc.png';
import navbarWallet from '../assets/images/header/btn_money.png';
import CardModal from './CardModal';

const Navbar2 = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <header className="my-navbar2">
      {/* 測試modal */}
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="navbar-content w-100 d-flex justify-content-between align-items-center">
        <div className="w-100 d-flex align-items-start">
          {/* logo */}
          <Link to="/#" className="navbar-logo">
            <div className="navbar-logo-pc">
              <img src={navbarLogoPc} alt="logo" />
            </div>
          </Link>
          {/* navbar pc */}
          <div className="navbar2-pc">
            <ul className="navbar2-title w-100 d-flex justify-content-between t-16 font-BoldenVan">
              <li>
                <span>Blind Box</span>
              </li>
              <li>
                <span>Marketplace</span>
              </li>
              <li>
                <span>My NFTs</span>
              </li>
            </ul>
          </div>
        </div>
        {/* wallet */}
        <div className="navbar-wallet" onClick={() => setModalShow(true)}>
          <img src={navbarWallet} alt="icon-wallet" className="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
