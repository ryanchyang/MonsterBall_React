import './Banner.scss';
import coinMfb from '../../assets/images/coin_mfb.png';
import coinGold from '../../assets/images/coin_gold.png';
import { motion as m } from 'framer-motion';
import { fadeInFromLeft } from '../../utils/constants/framerConstant';

const Banner = () => {
  return (
    <>
      <section className="banner d-flex flex-column">
        <div className="col-sm-12 col-md-12  col-xl-6 col-12 d-flex flex-column justify-content-center">
          <m.h2
            className="banner-text-align"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Monsterball
          </m.h2>
          <m.h2
            className="color-darker-green banner-text-align"
            variants={fadeInFromLeft}
            initial="hidden"
            animate="slowVisible"
            exit="exit"
          >
            Ready to kick !!
          </m.h2>
          <p className="font-BoldenVan text-primary px-2 banner-text-align text-start mx-lg-0 mx-5 mb-5">
            In a world full of monsters, form a strong football team and there
            are monsters of various attributes waiting for you to collect, come
            and enter this fantasy world!
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-xl-start">
          <div className="me-4">
            <button className="banner-btn-green font-BoldenVan">
              <div className="banner-btn-icon">
                <img src={coinMfb} alt="coin-mfb" />
              </div>
              <span>BUY MFB</span>
            </button>
          </div>
          <button className="banner-btn-bluegreen font-BoldenVan">
            <div
              className="banner-btn-icon"
              style={{ width: '20px', height: '20px' }}
            >
              <img src={coinGold} alt="buy-gold" />
            </div>
            BUY GOLD
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
