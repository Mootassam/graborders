import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
function Profile() {
  const data = [
    {
      icon: "fa-solid fa-clock-rotate-left",
      name: "Tasks History",
      url: "/tasks",
    },
    { icon: "fa-solid fa-users", name: "My Team", url: "/team" },
    {
      icon: "fa-solid fa-money-bill-transfer",
      name: "Withdraw",
      url: "/withdraw",
    },
    { icon: "fa-solid fa-lock", name: "Security", url: "/security" },
    {
      icon: "fa-solid fa-arrow-right-arrow-left",
      name: "Transactions",
      url: "/transacation",
    },
    { icon: "fa-solid fa-wallet", name: "Bind Wallet", url: "/wallet" },
  ];
  return (
    <div className="app__profile">
      <div className="profile__arc">
        <div className="profile__header">
          <div className="profile__vip">
            <img
              src="https://img.freepik.com/premium-photo/profile-shot-asian-cute-woman-perfect-skin-turn-left-smiling-joyfully-pose-near-blue-background-standing-queue-awaiting-coffee-take-away-relaxed-chatting-girlfriend-wear-yellow-summer-t-shirt_1258-57885.jpg"
              alt=""
              className="profile__photo"
            />
          </div>
          <div className="profile__user">
            <div className="user__header">
              <div className="user__name">Javedd</div>
              <div className="user__vip">
                {" "}
                <img
                  src="/images/profile/diamond.png"
                  alt="vip__profile"
                  className="diamond__vip"
                />{" "}
                Lv1{" "}
              </div>
            </div>
            <div>
              {" "}
              invitation code :<span className="user__name">teku9a </span>
            </div>
          </div>
        </div>

        <div className="profile__subheader">
          <div className="subheader__balance">Available balance</div>
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
        {data.map((item) => (
          <Link to={item.url} className="remove__ligne">
            <div className="profile__link">
              <div>
                <i className={`${item.icon} profile__icon`}></i>
              </div>
              <div>{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Profile;
