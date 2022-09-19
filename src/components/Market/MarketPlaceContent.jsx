import './MarketPlaceContent.scss';
import { useState } from 'react';
import { dataTab, dataPanel } from './testData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const MarketPlaceContent = () => {
  const [cate, setCate] = useState(dataTab);
  const [data, setData] = useState(dataPanel);
  const [visible, setVisible] = useState(15);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 5);
  };

  return (
    <div className="market-place-cate-area">
      <Tabs>
        <TabList className="market-place-tab-block">
          {cate.map(cate => (
            <Tab key={cate.id} className="market-place-tab">
              {cate.title}
            </Tab>
          ))}
        </TabList>
        {dataPanel.map(data => (
          <TabPanel key={data.id}>
            <div className="option">
              <h2 className="title">1,000 Items</h2>
              <div className="view">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="btn-sort-by dropdown"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7H21"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6 12H18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M10 17H14"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span>Low To High</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ margin: 0 }}>
                    <Dropdown.Item href="#">Top rate</Dropdown.Item>
                    <Dropdown.Item href="#">Mid rate</Dropdown.Item>
                    <Dropdown.Item href="#">Low rate</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="market-place-card-block">
              {data.dataContent.slice(0, visible).map((item, key) => (
                <div key={key} className="market-place-card">
                  <div className="card-header d-flex justify-content-between align-items-end mb-3">
                    <div className="author d-flex">
                      <div className="avatar">
                        <img src={item.imgAuthor} alt="Axies" />
                      </div>
                      <div className="info">
                        <span>Creator</span>
                        <h6 className="author">
                          <Link to="/author-02">{item.nameAuthor}</Link>
                        </h6>
                      </div>
                    </div>
                    <button className="like-btn">
                      <span className="d-flex align-items-center">
                        <AiOutlineHeart className="t-16 me-2" />
                        {item.wishlist}
                      </span>
                    </button>
                  </div>
                  <div className="card-media mb-4">
                    <Link to="/item-details-01">
                      <img src={item.img} alt="monster" />
                    </Link>
                    <div className="featured-countdown">
                      <span className="slogan"></span>
                      {/* <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown> */}
                    </div>
                    {/* <div className="button-place-bid">
                      <button
                        data-toggle="modal"
                        data-target="#popup_bid"
                        className="sc-button style-place-bid style bag fl-button pri-3"
                      >
                        <span>Place Bid</span>
                      </button>
                    </div> */}
                  </div>
                  <div className="card-title mb-3">
                    <h5>
                      <Link to="item-details.html">{item.title}</Link>
                    </h5>
                  </div>
                  <div className="meta-info">
                    <div className="d-flex align-items-center">
                      <span className="me-2">Current Bid</span>
                      <span className="pricing">{item.price}</span>
                    </div>
                    <div className="tags">{item.tags}</div>
                  </div>
                </div>
              ))}

              {visible < data.dataContent.length && (
                <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                  <Link
                    to="#"
                    className="sc-button loadmore fl-button pri-3"
                    onClick={showMoreItems}
                  >
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </div>
            <div className="content-item2">
              {data.dataContent.slice(0, visible).map((item, index) => (
                <div key={index} className="col-item">
                  <div className="sc-card-product menu_card style-h7">
                    <div className="wrap-media">
                      <div className="card-media">
                        <Link to="/item-details-01">
                          <img src={item.img} alt="Axies" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-title">
                      <p>Item Name</p>
                      <h4>
                        <Link to="/item-details-01">{item.title}</Link>
                      </h4>
                    </div>
                    <div className="meta-info style">
                      <p>Creator</p>
                      <div className="author">
                        <div className="avatar">
                          <img src={item.imgAuthor} alt="Axies" />
                        </div>
                        <div className="info">
                          <h4>
                            {' '}
                            <Link to="author02.html">
                              {item.nameAuthor}
                            </Link>{' '}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="countdown">
                      <p>Countdown</p>
                      <div className="featured-countdown">
                        <span className="slogan"></span>
                        {/* <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown> */}
                      </div>
                    </div>
                    <div className="wrap-hear">
                      <button className="wishlist-button heart">
                        <span className="number-like"> {item.wishlist}</span>
                      </button>
                    </div>
                    <div className="wrap-tag">
                      <div className="tags">{item.tags}</div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="info">
                          <p>Current Bid</p>
                          <p className="pricing">{item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="button-place-bid">
                      <button
                        data-toggle="modal"
                        data-target="#popup_bid"
                        className="sc-button style-place-bid style bag fl-button pri-3"
                      >
                        <span>Place Bid</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {visible < data.dataContent.length && (
                <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                  <Link to="#" className="sc-button loadmore fl-button pri-3">
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MarketPlaceContent;
