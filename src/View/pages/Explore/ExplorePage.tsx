import React, { useEffect, useState } from "react";
import "../styles/styles.css";

function ExplorePage() {
  const [active, setActive] = useState("news");

  const showTopic = (item) => {
    setActive(item);
  };
  useEffect(() => { }, [active]);

  return (
    <div>
      <h1>Im a new here</h1>
    </div>
  );
}

export default ExplorePage;
