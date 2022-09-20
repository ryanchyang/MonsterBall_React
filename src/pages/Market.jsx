import Navbar from '../components/Navbar';
import MarketPlaceContent from '../components/Market/MarketPlaceContent';
import MarketSideBar from '../components/Market/MarketSideBar';

const Market = () => {
  return (
    <>
      {/* <Navbar /> 放第二種navbar*/}
      <div className="market-place-container">
        <MarketPlaceContent />
        <MarketSideBar />
      </div>
    </>
  );
};

export default Market;
