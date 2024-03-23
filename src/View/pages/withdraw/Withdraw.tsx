import React from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function Withdraw() {
  return (
    <div>
      <SubHeader title="WithDraw" path="/profile" />
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
            className="input__"
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
    </div>
  );
}

export default Withdraw;
