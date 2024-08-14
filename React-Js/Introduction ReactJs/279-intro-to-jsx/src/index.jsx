// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


// create by variable
// var React = require("react");
// var ReactDOM = require("react-dom");

// import module
import React from "react";
import ReactDOM from "react-dom";

// syntax render
// ReactDOM.render("What would you want to show",  "where you want to show ")
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// other version es2015
ReactDOM.render(
  React.createElement("h1", null, "Hello World"),
  document.getElementById("root")
);

// actually run inside render
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").appendChild(h1);

// render function only take one element tag but just use a div tag to container another tag
ReactDOM.render(
  <div>
    <h1> Use div to resolve error from render function</h1>
    <p>this is another tag inside render</p>
  </div>,
  document.getElementById("root")
);
