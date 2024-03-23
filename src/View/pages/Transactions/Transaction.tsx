import React, { useState } from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function Transaction() {
  const [active, setActive] = useState("all");

  const all = () => {
    return (
      <div className="content__transaction">
        <div className="transaction__left">
          <div>Order amount return</div>
          <div className="transaction__date">2024-06-24 15:17</div>
        </div>
        <div className="transaction__right">100.82</div>
      </div>
    );
  };
  const withdraw = () => {
    return (
      <div className="content__transaction">
        <div className="transaction__left">
          <div>Order amount return</div>
          <div className="transaction__date">2024-06-24 15:17</div>
        </div>
        <div className="transaction__right">100.82</div>
      </div>
    );
  };
  const deposit = () => {
    return (
      <div className="content__transaction">
        <div className="transaction__left">
          <div>Order amount return</div>
          <div className="transaction__date">2024-06-24 15:17</div>
        </div>
        <div className="transaction__right red">-0.82</div>
      </div>
    );
  };

  return (
    <div>
      <SubHeader title="Transaction" path="/profile" />
      <div className="order__list">
        <div className="list__transaction">
          <div
            className={active === "all" ? `active__transacttion` : ""}
            onClick={() => setActive("all")}
          >
            <span className="">All</span>
          </div>
          <div
            onClick={() => setActive("withdraw")}
            className={active === "withdraw" ? `active__transacttion` : ""}
          >
            {" "}
            <span>Withdraw</span>
          </div>
          <div
            onClick={() => setActive("deposit")}
            className={active === "deposit" ? `active__transacttion` : ""}
          >
            <span>Deposit</span>
          </div>
        </div>
      </div>

      <div className="transaction__content">
        {active === "all" && Array.from({ length: 14 }).map((item) => all())}
        {active === "withdraw" &&
          Array.from({ length: 7 }).map((item) => withdraw())}
        {active === "deposit" &&
          Array.from({ length: 6 }).map((item) => deposit())}
      </div>
    </div>
  );
}

export default Transaction;
