import React from "react";
import { Link } from "react-router-dom";

function SubHeader(props) {
  return (
    <div>
      <div className="subpage__header">
        <div className="arrow__back">
          <Link to={props?.path}>

            {props.title ==="WithDraw" ?             <i className="fa-solid fa-home arrowleft"></i> :<i className="fa-solid fa-arrow-left arrowleft"></i>
}
            
          </Link>
        </div>
        <h3>{props?.title}</h3>
        <div></div>
      </div>
    </div>
  );
}
export default SubHeader;
