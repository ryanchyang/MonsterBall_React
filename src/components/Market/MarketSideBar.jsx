import { useState } from 'react';
import './MarketSideBar.scss';
import { filterCate } from './testData';
import { Accordion } from 'react-bootstrap-accordion';
import { BsCheckLg } from 'react-icons/bs';

const MarketSideBar = () => {
  const [cate, setCate] = useState(filterCate);
  return (
    <div className="market-side-bar-area">
      <div className="market-side-bar-container">
        <div className="market-side-bar-filter">
          <h3>Filter</h3>
        </div>
        <div className="wrap-category">
          {cate.map((item, index) => (
            <div key={index} className="side-bar-accordion">
              <Accordion title={item.title} show={true}>
                <form className="mt-3 py-3">
                  {item.content.map((itemm, index) => (
                    <div key={index} className="cate-name">
                      <label className="d-flex justify-content-between">
                        <span>{itemm.field}</span>
                        <span className="pst-re">
                          <input
                            type="checkbox"
                            defaultChecked={itemm.checked}
                            hidden
                          />
                          <span
                            className={`btn-checkbox ${
                              itemm.checked && 'clicked'
                            }`}
                          >
                            {itemm.checked && (
                              <BsCheckLg
                                style={{
                                  fontSize: '14px',
                                  marginBottom: '2px',
                                }}
                              />
                            )}
                          </span>
                        </span>
                      </label>
                      <br />
                    </div>
                  ))}
                </form>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketSideBar;
