import React, { useState } from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function Transaction() {
  const [active, setActive] = useState("all");

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
    </div>
  );
}

export default Transaction;
