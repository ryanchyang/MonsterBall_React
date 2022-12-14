import './Technology.scss';
import tech1 from '../../assets/images/home/technology/home_tech_01.png';
import tech2 from '../../assets/images/home/technology/home_tech_02.png';
import tech3 from '../../assets/images/home/technology/home_tech_03.png';
import tech4 from '../../assets/images/home/technology/home_tech_04.png';
import tech5 from '../../assets/images/home/technology/home_tech_05.png';

const Technology = () => {
  return (
    <section className="technology-area">
      <h2 className="text-center mb-5">Technology</h2>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <div className="technology-tag-img">
          <img src={tech1} alt="" />
        </div>
        <div className="technology-tag-img">
          <img src={tech2} alt="" />
        </div>
        <div className="technology-tag-img">
          <img src={tech3} alt="" />
        </div>
        <div className="technology-tag-img">
          <img src={tech4} alt="" />
        </div>
        <div className="technology-tag-img">
          <img src={tech5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Technology;
