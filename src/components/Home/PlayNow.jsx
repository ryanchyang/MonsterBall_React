import './PlayNow.scss';
import playerNowMonster from '../../assets/images/home/home_monster_02.png';
import Ripples from 'react-ripples';

const PlayNow = () => {
  return (
    <section className="play-now-area">
      <div className="d-flex flex-column col-lg-8 col-xl-6 font-BoldenVan mx-lg-5">
        <h2 className="mb-4">PLAY NOW !!</h2>
        <p>
          Monsterball is a realistic real-time battle and money-making game.
        </p>
        <p>
          You can have your own monster, just your own monster, and match the
          world's number one
        </p>
        <p>football game to create your own strongest strength!</p>
        <button className="play-now-btn mt-4">PLAY</button>
      </div>
      <div className="play-now-img">
        <img src={playerNowMonster} alt="play-now-monster" />
      </div>
    </section>
  );
};

export default PlayNow;
