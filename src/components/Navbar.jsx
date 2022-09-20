import { useEffect } from 'react';
import { useAccount, useConnect, useNetwork, useSwitchNetwork } from 'wagmi';
import './Navbar.scss';
import navbarImage from '../assets/images/header/menu_bg.png';
import navbarLogoMb from '../assets/images/logo_mb.png';
import navbarLogoPc from '../assets/images/logo_pc.png';
import navbarWallet from '../assets/images/header/btn_money.png';
import { Link, useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

// https://monsterfootball-1.gitbook.io/untitled/
const Navbar = () => {
  const { connect, connectors, activeConnector, isLoading, error } =
    useConnect();
  const { address, isConnected } = useAccount();

  const connector = connectors[0]; // 連接Metamask
  const history = useHistory(null);

  // 判斷wallet狀態
  const walletHandler = () => {
    if (isConnected) {
      return (
        <div>
          <div>{address}</div>
          <div>Connected to {connector.name}</div>
        </div>
      );
    } else {
      if (isLoading) {
        return <span className="t-16 font-LufgaBold">Connecting...</span>;
      } else {
        return (
          <div
            className="navbar-wallet"
            onClick={() => connect({ connector })}
            disabled={!connector.ready}
          >
            <img src={navbarWallet} alt="icon-wallet" className="" />
            {/* error 除錯 */}
            {/* {error && <div>{error.message}</div>} */}
          </div>
        );
      }
    }
  };

  return (
    <header className="my-navbar">
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
                <span
                  onClick={() =>
                    window.open(
                      'https://monsterfootball-1.gitbook.io/untitled/',
                      '_blank'
                    )
                  }
                >
                  Paper
                </span>
              </li>
              <li>
                <span>Road map</span>
              </li>
              <li>
                <span>NFT item</span>
              </li>
              <li>
                <span onClick={() => history.push('/market')}>Market</span>
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
        {walletHandler()}
      </div>
      <div className="navbar-img">
        <img src={navbarImage} alt="navbar_image" className="" />
      </div>
    </header>
  );
};

export default Navbar;
