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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >

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

      <div className="advertise__speaker">
        <div>
          <i className="fa-solid fa-volume-off speaker"></i>
        </div>
        <div className="speaker__text">
          ****na agent reached 3000 direct active
        </div>
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
          <label htmlFor="">Company Profile</label>
        </div>

        <div className="button__action">
          <div className="action__cirlce"></div>
          <label htmlFor="">Promotion Reward</label>
        </div>

        <div className="button__action">
          <div className="action__cirlce"></div>
          <label htmlFor="">Invitatation</label>
        </div>

        <div className="button__action">
          <div className="action__cirlce"></div>
          <label htmlFor="">Promotion Reward</label>
        </div>

      </div>

      <div className="advertise__content">

        <div className="content__header">
          <h3 className="hall">Business Hall</h3>


          <div className="content__vip">
            {Array.from({ length: 6 }).map(() => <>
              <div className="vip">

                <div className="vip__image"></div>

                <div className="vip__text">
                  <div className="vip__title">Shopee</div>


                  <div className="vip__details">

                    <div className="vip__description">
                      <div className="description__key">Entry Limit:</div>
                      <div className="description__value"> 0.00</div>
                    </div>
                    <div className="vip__description">
                      <div className="description__key">Level Limit:</div>
                      <div className="description__value"> Lv 1</div>
                    </div>
                    <div className="vip__description">
                      <div className="description__key">Daily order:</div>
                      <div className="description__value">50</div>
                    </div>
                    <div className="vip__description">
                      <div className="description__key">Comimsion rate:</div>
                      <div className="description__value"> 0.26%</div>
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
  );
}

export default Market;
