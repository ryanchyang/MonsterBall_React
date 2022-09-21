import './SideNavbar.scss';
import { forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import {
  sideNavbarVariants,
  maskVariants,
} from '../utils/constants/framerConstant';

const SideNavbar = forwardRef((props, ref) => {
  const { setSidebarShow } = props;
  const { gamePlayRef, roadmapRef, nftItemRef } = ref;
  const history = useHistory(null);
  return (
    <>
      <m.div
        className="mask"
        variants={maskVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={() => setSidebarShow(false)}
      ></m.div>
      <m.div
        className="side-navbar-area"
        variants={sideNavbarVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ul className="sidebar-list w-100 d-flex flex-column justify-content-between t-16 font-BoldenVan">
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                gamePlayRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Gamplay
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                window.open(
                  'https://monsterfootball-1.gitbook.io/untitled/',
                  '_blank'
                );
              }}
            >
              Paper
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Road map
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                nftItemRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              NFT item
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                setSidebarShow(false);
                history.push('/market');
              }}
            >
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
          <li>
            <button className="sidebar-connect-btn">Connect wallet</button>
          </li>
        </ul>
      </m.div>
    </>
  );
});

export default SideNavbar;
