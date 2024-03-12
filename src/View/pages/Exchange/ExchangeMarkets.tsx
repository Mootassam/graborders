import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleExchange from "../Coin/SingleExchange";
function ExchangeMarkets(props) {
  const { id } = props;

  const [response, setResponse] = useState([]);
  const [totale, setTotale] = useState("");

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.90.76:8080/api/exchanges/market/${props.id}`
      );
      setResponse(data.data.markets);
      setTotale(data.data.stats.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, [props.id]);
  return (
    <div>
      <br />
      <SingleExchange
        response={response}
        path="/coin"
        markets="makets"
        base="base"
        name="Markets"
        total={totale}
      />
    </div>
  );
}

export default ExchangeMarkets;
