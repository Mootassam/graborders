import React from "react";
import "../styles/styles.css";
function Profile() {
  return (
    <div className="app__profile">

      <div className="profile__header">
        <div className="profile__vip"></div>
        <div className="profile__user">
          <div> Javedd </div>
          <div> invitation code : teku9a</div>
        </div>
      </div>

      <div className="profile__subheader"></div>
      <div className="profile__content">
        <div className="profile__link">
          <div><i className="fa-solid fa-clock-rotate-left profile__icon" ></i></div>
          <div>Tasks History</div>
        </div>
        <div className="profile__link">
          <div><i className="fa-solid fa-users profile__icon"></i></div>
          <div>My Team</div>
        </div>
        <div className="profile__link"> <div>
          <i className="fa-solid fa-money-bill-transfer profile__icon"></i>
        </div>
          <div>Withdraw</div></div>
        <div className="profile__link">
          <div><i className="fa-solid fa-lock profile__icon"></i></div>
          <div>security</div>
        </div>
        <div className="profile__link">
          <div></div>
          <div>Transactions</div>
        </div>
        <div className="profile__link">
          <div></div>
          <div>Contact us</div>
        </div>
        <div className="profile__link">
          <div></div>
          <div>Bind Wallet</div>
        </div>
        <div className="profile__link">
          <div></div>
          <div>Sound Settings</div>
        </div>
        <div className="profile__link">
          <div><i className="fa-solid fa-right-from-bracket profile__icon"></i></div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
