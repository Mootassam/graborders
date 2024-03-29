import React from "react";
import "../styles/styles.css";
function Grappage() {
  const icon_height = 79;
  const num_icons = 9;
  const time_per_icons = 100;

  const roll = (reel, offset = 0) => {
    const delta =
      (offset + 2) * num_icons + Math.round(Math.random() * num_icons);

    return new Promise((resolve, ) => {
      const style = getComputedStyle(reel);
      const backgroundPositionY = parseFloat(style["background-position-y"]);
      const targetBackgroundPositionY =
        backgroundPositionY + delta * icon_height;
      const normTargetBackgroundPositionY =
        targetBackgroundPositionY % (num_icons * icon_height);
      setTimeout(() => {
        // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
        reel.style.transition = `background-position-y ${
          (8 + 1 * delta) * time_per_icons
        }ms cubic-bezier(.41,-0.01,.63,1.09)`;
        // Set background position
        reel.style.backgroundPositionY = `${
          backgroundPositionY + delta * icon_height
        }px`;
      }, offset * 150);

      // After animation
      setTimeout(() => {
        // Reset position, so that it doesn't get higher without limit
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
        // Resolve this promise
        resolve(delta % num_icons);
      }, (8 + 1 * delta) * time_per_icons + offset * 150);
    });
  };

  const rollAll = () => {
    const reelsList = document.querySelectorAll(".slots > .reel");
    Promise.all(Array.from(reelsList).map((reel, i) => roll(reel, i)))
      .then(() => {
        const slots = document.querySelector(".borders");
        const modal = document.querySelector(".modal__grap");
        if (slots) {
          slots.classList.add("win1");
          setTimeout(() => {
            modal?.classList.add("show");
          }, 2000);
        }
        setTimeout(() => {
          if (slots) {
            slots.classList.remove("win1");
          }
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        
        // Handle errors
      });
  };

  const hideModal = () => {
    const modal = document.querySelector(".modal__grap");
    if (modal) {
      modal?.classList.remove("show");
    }
  };

  return (
    <>
      <div className="app__grappage">
        <div className="online__service">
          <h4>Grap</h4>
        </div>

        <div className="grap__order">
          <div className="order__top">
            <div className="first__order">
              <div className="vip__title">Shopee</div>
              <div>
                <label className="vip__commission">Commission Rate:</label>
                <label className="comission"> 0.26%</label>
              </div>
            </div>
            <div className="second__order">
              <div>
                <span className="exclusive__channel">
                  Exclusive channel for exclsuive members
                </span>
              </div>
            </div>
          </div>

          <div className="borders">
            <div className="slots">
              <div className="reel"></div>
              <div className="reel"></div>
              <div className="reel"></div>
            </div>
          </div>

          <div style={{ paddingTop: 10 }}>
            <span className="exclusive__chaneels">
              Exclusive channel for exclsuive members
            </span>
          </div>
        </div>

        <div className="button__grap">
          <button className="button__upgrade">Deposit Upgrade</button>
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
            <div className="group__comission">
              {" "}
              <div className="comission__text">Availbale Balance</div>
              <div className="comission__value"> 300.26</div>
            </div>
            <div className="group__comission">
              {" "}
              <div className="comission__text">Orders Completed</div>
              <div className="comission__value"> 1</div>
            </div>
            <div className="group__comission">
              {" "}
              <div className="comission__text">Cancelled</div>
              <div className="comission__value"> 0.00</div>
            </div>
          </div>

          <div className="comission__smallmessage">
            A higher rank member can unlock more orders and get more commission
          </div>
        </div>

        <div className="rules__description">
          <div className="rules__title">Rules Description</div>
          <ul className="rules__list">
            <li>
              (1) Every members from this room be able to grap 55 orders per day{" "}
            </li>
            <li>
              (2) The commission of the purchase would be 0.28% of each order
              amount
            </li>
            <li>
              (3) The system automatic dispatch the products throught the cloud.{" "}
            </li>
            <li>
              (4) if the order is not confirmed and submitted bu the member
              after the product successfully dispatch, he/she might not be able
              to continue to grab the orders. The member need to process with
              the previous order to continue with the task.
            </li>
          </ul>
        </div>

        <div className="modal__grap">
          <div className="modal__product">
            <div className="single__product">
              <div className="single__header">Shopee</div>

              <div className="order__time">
                <div>Order Time: 2022-06-27 14:03:52</div>
                <div>Order Number: N02206271321321354165</div>
              </div>
              <div className="badge__ pending">
                <label>Pending</label>
              </div>
              <div className="product__image">
                <div className="image__"></div>

                <div className="product__detail">
                  <div className="detail__name">
                    Van Hueusen Men's Slim Fir Never Tuck Short Sleeve Button
                    Down Shirt
                  </div>
                  <div className="detail__price">
                    <div> 100.82</div>
                    <div>X 1</div>
                  </div>
                </div>
              </div>

              <div className="bottom__cadre">
                <div className="cadre__detail">
                  <div>Total order amount</div>
                  <div>100.82</div>
                </div>

                <div className="cadre__detail">
                  <div>Commission</div>
                  <div>0.26</div>
                </div>

                <div className="cadre__detail">
                  <div>Estimated return</div>
                  <div>101.08</div>
                </div>
              </div>

              <div className="bottom__submit">
                <div className="submit__ligne"></div>
                <div className="sumbit__buttons">
                  <div className="cancel__product" onClick={() => hideModal()}>
                    Cancel
                  </div>
                  <div className="submit__product">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grappage;
