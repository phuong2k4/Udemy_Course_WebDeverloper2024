import React from "react";
import Input from "./Input";

export function Login() {
  return (
    <form action="" className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
