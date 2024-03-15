import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function Online() {
  const [active, setActive] = useState("news");

  const showTopic = (item) => {
    setActive(item);
  };
  useEffect(() => { }, [active]);

  return (
    <div>

      <div className="online__header">
        if you have any questions or encounter issues, please email us or chat with our online customer support team.
      </div>

      <div className="contact__list">

        {Array.from({ length: 5 }).map(() => <div className="contact__online">
          <div className="list__header"> WhatsApp online </div>
          <div className="online__image"> image of the whatsApp</div>
          <div className="online__footer"> Number phone of whatsApp</div>
        </div>)}

      </div>

    </div>
  );
}

export default Online;
