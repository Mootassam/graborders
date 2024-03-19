import React from "react";
import "../styles/styles.css";
function Profile() {
  return (
    <div className="app__profile">

      <div className="profile__arc">
        
        <div className="profile__header">
          <div className="profile__vip">
            <img src="https://img.freepik.com/premium-photo/profile-shot-asian-cute-woman-perfect-skin-turn-left-smiling-joyfully-pose-near-blue-background-standing-queue-awaiting-coffee-take-away-relaxed-chatting-girlfriend-wear-yellow-summer-t-shirt_1258-57885.jpg" alt="" className="profile__photo" />
          </div>
          <div className="profile__user">
            <div className="user__header">
              <div className="user__name">Javedd</div>
              <div className="user__vip"> <img src="/images/profile/diamond.png" alt="vip__profile" className="diamond__vip" /> Lv1 </div>
            </div>
            <div> invitation code :
              <span className="user__name">
                teku9a </span></div>
          </div>
        </div>

        <div className="profile__subheader">

          <div className="subheader__balance">
            Available balance
          </div>
          <div className="profile__amount">
            <div className="profile__balance">300000</div>
            <div className="profile__button">
              <div className="button__deposit">Deposit</div>
              <div className="button__withdraw">Withdraw</div>
            </div>
          </div>

        </div>

      </div>


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
          <div><i className="fa-solid fa-arrow-right-arrow-left profile__icon"></i></div>
          <div>Transactions</div>
        </div>
        <div className="profile__link">
          <div>
            <i className="fa-solid fa-message profile__icon"></i>
          </div>
          <div>Contact us</div>
        </div>
        <div className="profile__link">
          <div><i className="fa-solid fa-wallet profile__icon"></i></div>
          <div>Bind Wallet</div>
        </div>
        <div className="profile__link">
          <div><i className="fa-solid fa-volume-low profile__icon"></i></div>
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
