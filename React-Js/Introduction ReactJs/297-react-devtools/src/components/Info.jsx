import React from "react";

export function Information({ prod }) {
  return (
    <div className="bottom">
      <p className="info">{prod.tel}</p>
      <p className="info">{prod.email}</p>
    </div>
  );
}

export default Information;
