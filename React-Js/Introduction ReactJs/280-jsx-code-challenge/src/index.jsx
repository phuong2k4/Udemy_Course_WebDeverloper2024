//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import React from "react";
import reactDOM from "react-dom";

reactDOM.render(
  <div>
    <h1>My Favorite song: </h1>
    <ol>
      <li>I'd rather pretend by Bryant Barnes</li>
      <li>Sicko Mode by Travis Scott ft Drake</li>
      <li>Pray for me by The Weeknd</li>
    </ol>
  </div>,
  document.getElementById("root")
);
