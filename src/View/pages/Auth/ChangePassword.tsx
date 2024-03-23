import React from "react";
import SubHeader from "../../../View/shared/Header/SubHeader";

function ChangePassword() {
  return (
    <div>
      <SubHeader title="Change password" path="/profile" />
      <div className="app__wallet">
        <div className="wallet__">
          <h3 className="hall">Change Password</h3>
          <div className="wallet__form">
            <div className="form__">
              <div className="form__group">
                <div className="label__form">
                  <span style={{ color: "red" }}>*</span>
                  <span style={{ fontSize: "13px" }}>Old Password</span>
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
                  <span style={{ fontSize: "13px" }}>New Password</span>
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
                  <span style={{ fontSize: "13px" }}>Confirm Password</span>
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
              <b>Note:</b> &nbsp; Please fill out this information carefully
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
