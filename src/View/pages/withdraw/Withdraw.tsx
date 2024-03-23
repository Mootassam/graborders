import React from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function Withdraw() {
  return (
    <div>
      <SubHeader title="WithDraw" path="/" />
      <div className="withdraw__content">
        <div className="withdraw__header">
          <h3 className="hall" style={{ paddingTop: 0 }}>
            Withdraw Amount:
          </h3>
          <span style={{ color: "red", fontSize: "14px" }}>
            Handling fee 0.20%
          </span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter the withdraw amount"
            className="input__withdraw"
          />
          <div className="">
            <div className="withdraw__">
              <div>30</div>
              <div>50</div>
              <div>100</div>
              <div>300</div>
            </div>
            <div className="withdraw__">
              <div>500</div>
              <div>1000</div>
              <div>3000</div>
              <div>5000</div>
            </div>
          </div>
          <div className="confirm">Confirm</div>
        </div>
      </div>

      <div className="withdraw__rules">
        <div className="rules__title">Rules Description</div>

        <ul className="rules__list">
          <li>(1) The amount of single withdraw is between 20 ~ 100000000 </li>
          <li>
            (2) the payment shall be made within 72 hours after the withdraw
            application is approved, and the actual time shall be subject to the
            system. The bank will charge a fee for each withdrawal, and the
            minumun withdraw amount is 20.
          </li>
          <li>
            (3) Every accounts must complete a minumun purchaes order of 50 in
            order to whithdraw the money . if the member has not completed the
            corresponding order number. he/she cannot make a withdrawl. The
            member can make a full withdrawl if the account has completed more
            than 50 orders{" "}
          </li>
          <li>(4) withdraw time is 16:00-15:59</li>
        </ul>
      </div>
    </div>
  );
}

export default Withdraw;
