import { React, useState } from "react";

function App() {
  const [time, setTime] = useState(0);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button
        onClick={() => {
          setTime((time) => (time += 1));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTime((time) => (time -= 1));
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;