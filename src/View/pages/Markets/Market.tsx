import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Market() {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {

  };
  useEffect(() => {
    searchAllCoins();
  }, []);

  useEffect(() => { }, [response]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ color: 'white', fontSize: 85 }}>Crypto Currencies prcies and signals</h3>

      <br />
      <br />

    </div>
  );
}

export default Market;
