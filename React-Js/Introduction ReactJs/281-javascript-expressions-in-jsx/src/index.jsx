import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const fname = 'David';
const lname = 'Junnior';

ReactDOM.render(<h1>Hello {fname}</h1>, document.getElementById("root"));

ReactDOM.render(
    <div>
        <h1>Hello {fname + " " + lname}</h1>
        <h2>Your random number: {Math.floor(Math.random()*10)}</h2>
    </div>,
    document.getElementById("root")
)