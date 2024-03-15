import React from "react";
import "../styles/styles.css";
function Grappage() {
  return <div className="app__grappage">


    <div className="grap__order"></div>

    <div className="button__grap">
      <div className="button__upgrade">
        Deposit Upgrade
      </div>
      <div className="grap">
        Automatic grab
      </div>
    </div>

    <div className="order__comission">
      <div className="today__achievements">
        <div>Today's achievements</div>
        <div className="achivemnts__refreshe">
          <i className="fa-solid fa-rotate-right click"></i>
        </div>
      </div>

      <div className="achievements__group">
        <div className="group__comission">
          <div className="comission__text">Comission</div>
          <div className="comission__value"> 0.26</div>
        </div>
        <div className="group__comission" >          <div className="comission__text">Availbale Balance</div>
          <div className="comission__value"> 300.26</div></div>
        <div className="group__comission">          <div className="comission__text">Orders Completed</div>
          <div className="comission__value"> 1</div></div>
        <div className="group__comission">          <div className="comission__text">Cancelled</div>
          <div className="comission__value"> 0.00</div></div>
      </div>

      <div className="comission__smallmessage">
        A higher rank member can unlock more orders and get more commission
      </div>


    </div>



    <div className="rules__description">
      <ul className="rules__list">
        <li>(1) Every members from this room be able to grap 55 orders per day </li>
        <li>(2) The commission of the purchase would be 0.28% of each order amount</li>
        <li>(3) The system automatic dispatch the products throught the cloud. </li>
        <li>(4) if the order is not confirmed and submitted bu the member after the product successfully</li>
      </ul>
    </div>
  </div>

}

export default Grappage;
