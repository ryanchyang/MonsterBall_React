import { forwardRef } from 'react';
import './NftItem.scss';
import nftItem from '../../assets/images/home/nftItem/nft_item_01.png';

// Import Swiper styles
import 'swiper/css';

const NftItem = () => {
  return (
    <section id="nft_item" className="nft-item-area">
      <div className="d-flex flex-column align-items-center col-lg-7 mx-auto">
        <h2 className="mb-4 text-center">Various combinations</h2>
        <p>
          Combine multiple major Monster types with hundreds of coats body parts
          and mode, creating infinite possibilities of Monster
        </p>
        <button
          className="nft-item-btn mt-4"
          onClick={() =>
            window.open(
              'https://monsterfootball-1.gitbook.io/untitled/',
              '_blank'
            )
          }
        >
          READ WHITE PAPER
        </button>
      </div>
      <div className="nft-item-monster-block">
        <ul className="nft-item-monster-list">
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
          <li className="nft-item-card">
            <div className="nft-item-card-img">
              <img src={nftItem} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NftItem;
