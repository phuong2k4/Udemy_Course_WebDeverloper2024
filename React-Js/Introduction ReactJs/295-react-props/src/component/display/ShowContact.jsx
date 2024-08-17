import React from "react";

export function ShowInformation({ prod }) {
  return (
    <div>
      {prod.map((item, ind) => {
        return (
          <div key={ind}>
            <h2>{item.name}</h2>
            <img src={item.img_src} alt="avatar_img" />
            <p>{item.contact_number}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowInformation;
