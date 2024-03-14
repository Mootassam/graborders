import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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

      <div className="advertise__header"></div>

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
          <label htmlFor="">Promotion Reward</label>
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

                <div className="vip__text"></div>



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
