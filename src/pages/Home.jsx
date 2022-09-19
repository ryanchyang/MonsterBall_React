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

const Home = () => {
  const currentWidth = useCurrentWidth();
  return (
    <>
      <main>
        <Navbar />
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
