import React, { useEffect, useState } from "react";
import SubHeader from "../../shared/Header/SubHeader";

function Invitation() {
  return (
    <div className="app__invitation">
      <SubHeader title="Invitation" path="/" />

      <div className="invitation__absolute"></div>
      <div className="invitation__content">
        <div className="invitation__logo">
          <img
            src="/images/invitation/logo.png"
            alt=""
            className="invitation__"
          />
        </div>
        <div className="invitation__details">
          <span>My Referral Code</span>
          <span className="refrenece__code">MVGUQ5</span>
          <div className="invitation__button">Copy referral Code</div>
        </div>
      </div>
    </div>
  );
}
export default Invitation;
