import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const customStyle = {
  color: "red",
  fontSize: "40px",
  fontFamily: "Franklin Gothic Medium",
  border: "1px solid black",
};

customStyle.fontSize = "35px";
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);