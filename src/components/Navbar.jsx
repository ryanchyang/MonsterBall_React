import { useState, useEffect, forwardRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';
import { shortenAddress } from '../utils/helpers/shortenAddress';
import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideNavbar from './SideNavbar';
import MyModal from './MyModal';
import Spinner from './Spinner';
import navbarImage from '../assets/images/header/menu_bg.png';
import navbarLogoMb from '../assets/images/logo_mb.png';
import navbarLogoPc from '../assets/images/logo_pc.png';
import navbarWallet from '../assets/images/header/btn_money.png';
import metamaskLogo from '../assets/images/metamask.png';
import walletconnectLogo from '../assets/images/walletconnect.png';
import { AnimatePresence } from 'framer-motion';

const binanceChainId = 97;

const Navbar = forwardRef((_, ref) => {
  const { gamePlayRef, roadmapRef, nftItemRef } = ref;
  const [sidebarShow, setSidebarShow] = useState(false);
  const [connectModalShow, setConnectModalShow] = useState(false);
  const [switchAlertModalShow, setSwitchAlertModalShow] = useState(false);

  // web3 hook start
  const {
    connect,
    connectors,
    activeConnector,
    isLoading: connectIsLoading,
    error,
  } = useConnect({
    onSuccess(data) {
      setConnectModalShow(false);
    },
    chainId: binanceChainId,
  });
  const { disconnect } = useDisconnect({
    onSuccess(data) {
      setConnectModalShow(false);
      setSwitchAlertModalShow(false);
    },
  });
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork, isLoading: switchIsLoading } = useSwitchNetwork({
    onSuccess(data) {
      setSwitchAlertModalShow(false);
    },
  });

  // web3 hook end
  const connector = connectors[0]; // 連接Metamask
  const history = useHistory(null);

  /* handler start */
  /* hander end */

  /* useEffect start */
  //連線後去看他如果switch chain 要擋下
  useEffect(() => {
    if (!chain || !switchNetwork) return;
    if (chain?.id !== binanceChainId) {
      // show modal to switch chain or log out
      setSwitchAlertModalShow(true);
    }
  }, [chain, switchNetwork]);
  /* useEffect end */

  const connectModalContent = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        className="connect-wallet-metamask-btn mb-3"
        onClick={() => connect({ connector })}
        disabled={!connector.ready || connectIsLoading || isConnected}
      >
        {connectIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <div>
          <img src={metamaskLogo} alt="metamask-button" />
        </div>
      </button>
      <button className="connect-wallet-metamask-btn" disabled={true}>
        <div>
          <img src={walletconnectLogo} alt="walletconnect-button" />
        </div>
      </button>
      {isConnected && (
        <button className="disconnect-wallet-btn mt-5" onClick={disconnect}>
          <span>{`Disconnect from ${connector.name}`}</span>
        </button>
      )}
    </div>
  );
  const switchAlertModalContent = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="mb-5">
        Currently this page only supported in BNB Smart Chain Testnet. Please
        switch your network to continue.
      </p>
      <button
        className="switch-network-btn mb-4"
        onClick={() => switchNetwork(binanceChainId)}
        disabled={switchIsLoading}
      >
        {switchIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <span>Switch network in wallet</span>
      </button>
      <button className="disconnect-wallet-btn" onClick={disconnect}>
        <span>{`Disconnect from ${connector.name}`}</span>
      </button>
    </div>
  );

  return (
    <header className="my-navbar">
      <MyModal
        show={connectModalShow}
        onHide={() => setConnectModalShow(false)}
        content={connectModalContent}
        title={'Connect Wallet'}
      />
      <MyModal
        show={switchAlertModalShow}
        content={switchAlertModalContent}
        title={'Check your network'}
        close={false}
      />
      <AnimatePresence>
        {sidebarShow && (
          <SideNavbar ref={ref} setSidebarShow={setSidebarShow} />
        )}
      </AnimatePresence>
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
          {!sidebarShow && (
            <div className="navbar-pc">
              <ul className="w-100 d-flex justify-content-between t-16 font-BoldenVan">
                <li>
                  <span
                    onClick={() => {
                      gamePlayRef.current.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Gamplay
                  </span>
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
                  <span
                    onClick={() => {
                      roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Road map
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => {
                      nftItemRef.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    NFT item
                  </span>
                </li>
                <li>
                  <span onClick={() => history.push('/market/marketplace')}>
                    Market
                  </span>
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
          )}
        </div>
        {/* hamburger */}
        <span className="cursor-pointer" onClick={() => setSidebarShow(true)}>
          <GiHamburgerMenu className="icon-hamburger" />
        </span>
        {/* wallet */}
        {!isConnected ? (
          <div
            className="navbar-wallet cursor-pointer "
            onClick={() => setConnectModalShow(true)}
            disabled={!connector.ready}
          >
            <img src={navbarWallet} alt="icon-wallet" className="" />
            {/* error 除錯 */}
            {/* {error && <div>{error.message}</div>} */}
          </div>
        ) : (
          <button
            className="connected-wallet-btn"
            onClick={() => setConnectModalShow(true)}
          >
            <div>{shortenAddress(address)}</div>
          </button>
        )}
      </div>
      <div className="navbar-img">
        <img src={navbarImage} alt="navbar_image" className="" />
      </div>
    </header>
  );
});

export default Navbar;
