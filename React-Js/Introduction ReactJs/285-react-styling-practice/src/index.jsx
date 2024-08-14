//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

const time = 19;
var say;
const customStyle = {
  color: "black",
};
if (time > 0 && time < 12) {
  say = "Good Morning";
  customStyle.color = "red";
  //or "Good Afternoon" if between 12PM and 6PM.
} else if (time >= 12 && time < 18) {
  say = "Good Afternoon";
  customStyle.color = "green";
  //or "Good evening" if between 6PM and midnight.
} else {
  say = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div className="heading">
    <h1 style={customStyle}>{say}</h1>
  </div>,
  document.getElementById("root")
);
