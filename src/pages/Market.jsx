import {
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import BlindBox from '../components/Market/BlindBox/BlindBox';
import MarketPlaceContent from '../components/Market/MarketPlaceContent';
import MarketSideBar from '../components/Market/MarketSideBar';
const Market = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Navbar2 />
      {/* <Navbar /> 放第二種navbar*/}
      <Switch>
        <Route path={`${path}/marketplace`} exact>
          <div className="market-place-container">
            <MarketPlaceContent />
            <MarketSideBar />
          </div>
        </Route>
        <Route path={`${path}/blind-box`}>
          <BlindBox />
        </Route>
      </Switch>
    </>
  );
};

export default Market;
