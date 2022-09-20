import Navbar2 from '../components/Navbar2';
import MarketPlaceContent from '../components/Market/MarketPlaceContent';
import MarketSideBar from '../components/Market/MarketSideBar';

const Market = () => {
  return (
    <>
      <Navbar2 />
      {/* <Navbar /> 放第二種navbar*/}
      <div className="market-place-container">
        <MarketPlaceContent />
        <MarketSideBar />
      </div>
    </>
  );
};

export default Market;
