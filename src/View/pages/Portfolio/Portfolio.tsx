import React, { useState } from "react";
import WachListMode from "./WachListMode";
import PortfolioMode from "./PortfolioMode";
function Portfolio() {
  const [active, setActive] = useState("portfolio");

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >


        <h1>i am the list of orders </h1>

        <p>so now this list we can add the list of items
          so fter athat we cann the list of items
          and then we cann apply for the others list of the trading and we can know wich one is better
          after that we cann papply fort thlsieets
          this list of the list of tiens
          so after that here in this ilst list we can the list of the descriptions.
        </p>



      </div>

    </div>
  );
}

export default Portfolio;
