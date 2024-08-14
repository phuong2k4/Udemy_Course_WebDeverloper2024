import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const img = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="img-css" src={img + "?grayscale"} alt="random" />
      <img
        className="img-css"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="moutain"
      />
      <img
        className="img-css"
        src="https://picsum.photos/id/237/200/300"
        alt="dog"
      />
    </div>
  </div>,
  document.getElementById("root")
);
