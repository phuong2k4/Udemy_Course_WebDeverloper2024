import React from "react";

export function Cards({ prod }) {
  return (
    <div>
      {prod.map((item) => {
        return (
          <div className="card">
            <div className="top">
              <h2>{item.name}</h2>
              <img src={item.imgURL} alt="avatar_img" />
            </div>
            <div className="bottom">
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
