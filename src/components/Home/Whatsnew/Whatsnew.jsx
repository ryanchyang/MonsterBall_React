import './Whatsnew.scss';
import WhatsnewCard from './components/WhatsnewCard';

const Whatsnew = () => {
  return (
    <section className="whatsnew-area">
      <div className="d-flex justify-content-between align-items-baseline font-BoldenVan mx-lg-5">
        <h2>WHAT'S NEW</h2>
        <span className="t-16 color-light-green cursor-pointer text-nowrap">{`READ MORE >`}</span>
      </div>
      <div className="mt-4 d-flex flex-column flex-lg-row justify-content-lg-between">
        <WhatsnewCard />
        <WhatsnewCard />
        <WhatsnewCard />
      </div>
    </section>
  );
};

export default Whatsnew;
