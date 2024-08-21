import React from "react";
import Login from "./Login";
import Register from "./Register";

const userIsRegistered = false;

//way 1:
// function Form() {
//   return (
//     <form className="form">
//       <input type="text" placeholder="Username" />
//       <input type="password" placeholder="Password" />
//       {
//         userIsRegistered === false && <input type="password" placeholder="Confirm Password" />
//       }
//       <button type="submit">{userIsRegistered === true ? "Login" : "Register"}</button>
//     </form>
//   );
// }


//way 2:
function Form() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Login /> : <Register />}
    </div>
  );
}

export default Form;
