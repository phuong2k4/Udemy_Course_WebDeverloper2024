import React from "react";
import Avatar from "./Avatar.jsx";
import Information from "./Info.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar prod={props.img} />
      </div>
      <Information prod={props} />
    </div>
  );
}

export default Card;
