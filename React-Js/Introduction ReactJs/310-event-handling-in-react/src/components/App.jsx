import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("Hello");
  const [mouse, setMouse] = useState(true);

  function handle() {
    setTitle("Submitted");
  }
  function mouseMoveOn() {
    setMouse(false);
  }

  function mouseMoveOut() {
    setMouse(true);
  }

  return (
    <div className="container">
      <h1>{mouse ? title : "Submit"}</h1>
      <input type="text" placeholder="What's your name?" keyDown={() => {}} />
      <button
        onClick={handle}
        onMouseOut={mouseMoveOut}
        onMouseMove={mouseMoveOn}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
