import Navbar from '../components/Navbar';
import Banner from '../components/Home/Banner';
import AddressGroup from '../components/Home/AddressGroup';
import IntroVideo from '../components/Home/IntroVideo';
import Whatsnew from '../components/Home/Whatsnew/Whatsnew';
import PlayNow from '../components/Home/PlayNow';
import Roadmap from '../components/Home/Roadmap';
import ToMarket from '../components/Home/ToMarket';
import NftItem from '../components/Home/NftItem';
import Team from '../components/Home/Team';
import Partner from '../components/Home/Partner';
import Technology from '../components/Home/Technology';
import Footer from '../components/Footer';
import useCurrentWidth from '../utils/hooks/useCurrentWidth';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation(null);
  const currentWidth = useCurrentWidth();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <AddressGroup currentWidth={currentWidth} />
        {currentWidth > Number(process.env.REACT_APP_LG_WIDTH) && (
          <IntroVideo />
        )}
        <Whatsnew />
        <PlayNow />
        <Roadmap />
        <ToMarket />
        <NftItem />
        <Team />
        <Partner />
        <Technology />
      </main>
      <Footer />
    </>
  );
};

export default Home;
