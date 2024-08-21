import React from "react";

export function Input(data) {
  return <input type={data.type} placeholder={data.placeholder} />;
}

export default Input;
