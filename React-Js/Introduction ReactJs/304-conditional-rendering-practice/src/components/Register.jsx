import React from "react";
import Input from "./Input";

export function Register() {
  return (
    <form action="" className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Comfirm Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
