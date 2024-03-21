import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Online() {
  const [active, setActive] = useState("news");

  const showTopic = (item) => {
    setActive(item);
  };
  useEffect(() => { }, [active]);

  const data = [{
    title: "WhatsApp Online",
    number: "https://wa.me/+15212060528"
  }, {
    title: "WhtasApp Reward",
    number: "https://wa.me/+15212052528"
  },
  {
    title: "Online Service",
    number: "https://wa.me/+15212058528"
  },
  {
    title: "Guide Service",
    number: "https://wa.me/+15244060528"
  }]

  return (
    <div>

      <div className="online__service">

        <h4>Customer Service</h4>
      </div>

      <div className="online__header">
        if you have any questions or encounter issues, please email us or chat with our online customer support team.
      </div>

      <div className="contact__list">

        {data.map((item) => <div className="contact__online">
          <div className="list__header">
            {item.title} </div>
          <div className="online__image">
            <img src="/images/online/customer.jpg" alt=""  className="customer__image"/>
          </div>
          <div className="online__footer">
            <a href={item.number} className="number__link">
              <div className="contact__now">  <i className="fa-brands fa-whatsapp" style={{ fontSize: 18 }}></i> Contact now </div>
            </a>
          </div>
        </div>)}

      </div>

    </div>
  );
}

export default Online;


