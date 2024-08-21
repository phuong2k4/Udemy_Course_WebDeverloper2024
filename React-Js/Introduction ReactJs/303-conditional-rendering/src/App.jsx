import React from "react";

import Form from "./components/Login.jsx";

const isLoginIn = false;
// const date = new Date().getHours();
// date > 12 ? console.log("jj") : null;
// date < 12 && console.log("nn");

function App() {
  return (
    // <div className="container">
    //   {isLoginIn === true && <h1>Hello</h1>  <Form />}
    // </div>
    <div className="container">{isLoginIn === false && <Form />}</div>
  );
}

export default App;

