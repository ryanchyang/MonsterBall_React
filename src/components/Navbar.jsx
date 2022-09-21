import { useEffect, forwardRef } from 'react';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';
import './Navbar.scss';
import navbarImage from '../assets/images/header/menu_bg.png';
import navbarLogoMb from '../assets/images/logo_mb.png';
import navbarLogoPc from '../assets/images/logo_pc.png';
import navbarWallet from '../assets/images/header/btn_money.png';
import metamaskLogo from '../assets/images/metamask.png';
import walletconnectLogo from '../assets/images/walletconnect.png';
import { Link, useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideNavbar from './SideNavbar';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MyModal from './MyModal';
import Spinner from './Spinner';
import { shortenAddress } from '../utils/helpers/shortenAddress';

// https://monsterfootball-1.gitbook.io/untitled/
const Navbar = forwardRef((_, ref) => {
  const { gamePlayRef, roadmapRef, nftItemRef } = ref;
  const [sidebarShow, setSidebarShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // web3 hook start
  const { connect, connectors, activeConnector, isLoading, error } = useConnect(
    {
      onSuccess(data) {
        checkIfOnChain();
        setModalShow(false);
      },
    }
  );
  const { disconnect } = useDisconnect({
    onSuccess(data) {
      setModalShow(false);
    },
  });
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { chains, pendingChainId, switchNetwork } = useSwitchNetwork();
  console.log(switchNetwork);
  // console.log({ chain, chains });
  // web3 hook end
  const connector = connectors[0]; // 連接Metamask
  const history = useHistory(null);

  // 判斷wallet狀態
  // const walletHandler = () => {
  //   if (isConnected) {
  //     return (
  //       <div>
  //         <div>{address}</div>
  //         <div>Connected to {connector.name}</div>
  //       </div>
  //     );
  //   } else {
  //     if (isLoading) {
  //       return <span className="t-16 font-LufgaBold">Connecting...</span>;
  //     } else {
  //       return (
  //         <div
  //           className="navbar-wallet cursor-pointer "
  //           onClick={() => connect({ connector })}
  //           disabled={!connector.ready}
  //         >
  //           <img src={navbarWallet} alt="icon-wallet" className="" />
  //           {/* error 除錯 */}
  //           {/* {error && <div>{error.message}</div>} */}
  //         </div>
  //       );
  //     }
  //   }
  // };

  // handler start
  const checkIfOnChain = () => {
    if (!chain) return;
    if (chain?.id !== 97) {
      switchNetwork({ chainId: 97 });
    }
  };

  useEffect(() => {
    checkIfOnChain();
  }, [isConnected]);
  // hander end

  const modalContent = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        className="connect-wallet-metamask-btn mb-3"
        onClick={() => connect({ connector })}
        disabled={!connector.ready || isLoading || isConnected}
      >
        {isLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <div>
          <img src={metamaskLogo} alt="metamask-button" />
        </div>
      </button>
      <button className="connect-wallet-metamask-btn">
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

  return (
    <header className="my-navbar">
      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={modalContent}
        title={'Connect Wallet'}
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
            onClick={() => setModalShow(true)}
            disabled={!connector.ready}
          >
            <img src={navbarWallet} alt="icon-wallet" className="" />
            {/* error 除錯 */}
            {/* {error && <div>{error.message}</div>} */}
          </div>
        ) : (
          <button
            className="connected-wallet-btn"
            onClick={() => setModalShow(true)}
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
