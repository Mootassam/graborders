import React from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function Wallet() {
  return (
    <div>
      <SubHeader title="Wallet" path="/profile" />
      <div className="app__wallet">
        <div className="wallet__">
          <h3 className="hall">Withdrawal method information</h3>
          <div className="wallet__form">
            <div className="form__">
              <div className="form__group">
                <div className="label__form">
                  <span style={{ color: "red" }}>*</span>
                  <span style={{ fontSize: "13px" }}>USDT-TRC20</span>
                </div>
                <div className="input__div">
                  <input
                    type="text"
                    name=""
                    placeholder="Please enter network address"
                    id=""
                    className="input__"
                  />
                </div>
              </div>
              <div className="form__group">
                <div className="label__form">
                  <span style={{ color: "red" }}>*</span>
                  <span style={{ fontSize: "13px" }}>USDT-ERC20</span>
                </div>
                <div className="input__div">
                  <input
                    type="text"
                    name=""
                    placeholder="Please enter network address"
                    id=""
                    className="input__"
                  />
                </div>
              </div>
            </div>

            <div className="button__submit">Submit</div>
            <span style={{ fontSize: 13 }}>
              <b>Note:</b> &nbsp; this informations not modified so please make
              sure that you fill it correctly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
