import Banner from '../components/Home/Banner';
import AddressGroup from '../components/Home/AddressGroup';
import Whatsnew from '../components/Home/Whatsnew/Whatsnew';
import PlayNow from '../components/Home/PlayNow';
import Roadmap from '../components/Home/Roadmap';
import ToMarket from '../components/Home/ToMarket';
import NftItem from '../components/Home/NftItem';
import Team from '../components/Home/Team';
import Partner from '../components/Home/Partner';
import Technology from '../components/Home/Technology';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <AddressGroup />
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
