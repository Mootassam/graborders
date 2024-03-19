import React, { useEffect, useState } from "react";
import "../styles/styles.css";
function Grappage() {

  const icon_width = 79;
  const icon_height = 79;
  const num_icons = 9;
  const time_per_icons = 100;
  const indexes = [0, 0, 0];


  const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);
    const style = getComputedStyle(reel),
      backgroundPositionY = parseFloat(style['background-position-y']);
    return new Promise((resolve, reject) => {
      reel.style.transation = `background-position-y ${8 + delta * time_per_icons}ms`;
      reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;

      setTimeout(() => {
        resolve(delta);
      }, 8 + delta * time_per_icons);
    })


  }

  const rollAll = () => {
    const reelsList = document.querySelectorAll('.slots > .reel');
    reelsList.forEach((reel, i) => {
      roll(reel, i).then(() => {
      })
    })

  }







  /**
   * Roll all reels, when promise resolves roll again
   */


  // Kickoff




  return <>
    <div className="app__grappage">


      <div className="grap__order">

        <div>

          <div className="first__order">
            <div className="vip__title">Shopee</div>
            <div>
              <label className="vip__commission">Commission Rate:</label>
              <label className="comission"> 0.26%</label>
            </div>
          </div>
          <div className="second__order">
            <div>
              <span className="exclusive__channel">Exclusive channel for exclsuive members</span>
            </div>
          </div>
        </div>


        <div className="slots">
          <div className="reel"></div>
          <div className="reel"></div>
          <div className="reel"></div>
        </div>

        <div id="debug" className="debug"></div>



        <div style={{ paddingTop: 10 }}>
          <span className="exclusive__chaneels">Exclusive channel for exclsuive members
          </span>
        </div>

      </div>

      <div className="button__grap">
        <button className="button__upgrade">
          Deposit Upgrade
        </button>
        <button className="grap" onClick={() => rollAll()}>
          Automatic grab
        </button>
      </div>

      <div className="order__comission">
        <div className="today__achievements">
          <div className="comission__title">Today's achievements</div>
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
        <div className="rules__title">Rules Description</div>
        <ul className="rules__list">
          <li>(1) Every members from this room be able to grap 55 orders per day </li>
          <li>(2) The commission of the purchase would be 0.28% of each order amount</li>
          <li>(3) The system automatic dispatch the products throught the cloud. </li>
          <li>(4) if the order is not confirmed and submitted bu the member after the product successfully
            dispatch, he/she might not be able to continue to grab the orders. The member need to process with the previous order to continue with the task.
          </li>
        </ul>
      </div>

      <div className="modal__grap"></div>
    </div>
  </>

}

export default Grappage;
