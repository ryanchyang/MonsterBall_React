import Navbar from '../components/Navbar';
import SideBar from '../components/Market/SideBar';
import ItemContent from '../components/Market/ItemContent';
// import '../assets/scss/marketTemplate.scss';

const Market = () => {
  return (
    <>
      <div className="home-8">
        <Navbar />
        <section className="tf-item tf-section">
          <div className="themesflat-container">
            <div className="row">
              <div className="col-box-17">
                <SideBar />
              </div>

              <div className="col-box-83">
                <ItemContent />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Market;
