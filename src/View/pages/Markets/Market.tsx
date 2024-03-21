import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Market() {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {

  };
  useEffect(() => {
    searchAllCoins();
  }, []);

  useEffect(() => { }, [response]);


  const data = [{
    image: "",
    title: "Shopee",
    Entrylimit: "0.00",
    LevelLimit: "300",
    Dailyorder: "30",
    Comimsion: '0.26%',
  }, {
    image: "",
    title: "Vip1",
    Entrylimit: "500",
    LevelLimit: "Lv 1",
    Dailyorder: "55",
    Comimsion: '0.50%',
  }, {
    image: "",
    title: "Vip2",
    Entrylimit: "700",
    LevelLimit: "Lv 2",
    Dailyorder: "70",
    Comimsion: '0.70%',
  }, {
    image: "",
    title: "Vip3",
    Entrylimit: "1500",
    LevelLimit: "Lv 3",
    Dailyorder: "100",
    Comimsion: '0.96%',
  }]


  const NewsTicker = ({ text }) => {
    return (
      <div className="news-ticker-container">
        <div className="news-ticker">
          <span>{text}</span>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >


      <div className="market__header"></div>

      <div className="advertise__header">
        <Carousel>
          <div>
            <img src="/images/home/1.png" alt="" className="image" />
          </div>
          <div>
            <img src="/images/home/2.png" alt="" className="image" />
          </div>
          <div>
            <img src="/images/home/3.png" alt="" className="image" />
          </div>
        </Carousel>
      </div>
      <div className="home__section">
        <div className="advertise__speaker">
          <div>
            <i className="fa-solid fa-volume-off speaker"></i>
          </div>
          <NewsTicker text="****na agent reached 3000 direct active 3211321 ****na agent reached 3000 direct active 321132" />

        </div>


        <div className="advertise__buttons">

          <div className="button__deposit">
            Deposit
          </div>
          <div className="button__withdraw">
            Withdraw
          </div>

        </div>
        <div className="adverstise__actions">

          <div className="button__action">
            <div className="action__cirlce"></div>
            <label htmlFor="" className="action__label">Company Profile</label>
          </div>

          <div className="button__action">
            <div className="action__cirlce"></div>
            <label htmlFor="" className="action__label">Promotion Reward</label>
          </div>

          <div className="button__action">
            <div className="action__cirlce"></div>
            <label htmlFor="" className="action__label">Invitatation</label>
          </div>

          <div className="button__action">
            <div className="action__cirlce"></div>
            <label htmlFor="" className="action__label">Promotion Reward</label>
          </div>

        </div>

        <div className="advertise__content">

          <div className="content__header">
            <h3 className="hall">Business Hall</h3>


            <div className="content__vip">
              {data.map((item) => <>
                <div className="vip">
                  <div className="vip__image"></div>
                  <div className="vip__text">
                    <div className="vip__title">{item.title}</div>
                    <div className="vip__details">
                      <div className="vip__description">
                        <div className="description__key">Entry Limit:</div>
                        <div className="description__value"> {item.Entrylimit}</div>
                      </div>
                      <div className="vip__description">
                        <div className="description__key">Level Limit:</div>
                        <div className="description__value"> {item.LevelLimit}</div>
                      </div>
                      <div className="vip__description">
                        <div className="description__key">Daily order:</div>
                        <div className="description__value">{item.Dailyorder}</div>
                      </div>
                      <div className="vip__description">
                        <div className="description__key">Comimsion rate:</div>
                        <div className="description__value"> {item.Comimsion}</div>
                      </div>
                    </div>
                  </div>
                </div></>)}
            </div>
          </div>


          <div className="content__footer">
            <h3 className="hall">User Commission Notifications</h3>

            <div className="user__notification">


              {Array.from(({ length: 5 })).map(() => <div className="user__details">
                <div className="user__cirlce"></div>
                <div className="user__text"> Conguratulations ****nus2 earn 1.87!</div>
              </div>)}







            </div>



          </div>


        </div>

      </div>


    </div>
  );
}

export default Market;
