import './WhatsnewCard.scss';
import MonsterCard1 from '../../../../assets/images/home/home_banner_01.png';
import { RiDiscordLine } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const WhatsnewCard = () => {
  return (
    <div className="font-LufgaBold">
      <div className="whatsnew-card-img">
        <img src={MonsterCard1} alt="monster-card" />
      </div>
      <div className="whatsnew-card-text">
        <h5 className="color-light-green">ANNOUNCEMENTS</h5>
        <p className="text-primary">New monsters are coming !!!</p>
        <p className="text-primary">Apr 11 - 3</p>
      </div>
      <div>
        <RiDiscordLine className="text-primary t-18 my-3 mx-3" />
        <AiOutlineTwitter className="text-primary t-18 my-3 mx-3" />
        <FaTelegramPlane className="text-primary t-18 my-3 mx-3" />
      </div>
    </div>
  );
};

export default WhatsnewCard;
