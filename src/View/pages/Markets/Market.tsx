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

      <div className="advertise__speaker"></div>


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


          <div className=""></div>


        </div>



      </div>




    </div>
  );
}

export default Market;
