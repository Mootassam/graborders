import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dates from "../../../View/shared/utils/Dates";
import SingleItem from "./SingleItem";

function ExploreTrading(props) {
  const [response, setResponse] = useState();
  const [data, setData] = useState<any>();
  const topic = props.topic;
  const searchTrading = async () => {
    const result = await axios.get(
      `http://192.168.90.76:8080/api/topic/${topic}`
    );
    setResponse(result.data);
    console.log(response);
  };

  useEffect(() => {
    searchTrading();
  }, []);

  useEffect(() => {}, [response]);

  return (
    <div>
      <SingleItem response={response?.data} />
    </div>
  );
}

export default ExploreTrading;
