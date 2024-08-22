import React from "react";
import { useState } from "react";
var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}
// function App(){
//   const [isDone, setIsDone] = useState(false);

//   function handle(){
//     setIsDone(condition => !condition);
//   }

//   return (
//     <div>
//        <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
//        <button onClick={handle}>Change Style</button>
//     </div>
//   )
// }

// function DOMChangeIfTrue(){
//   document.querySelector("p").style.textDecoration = "line-through";
// }

// function DOMChangeIfFalse(){
//   document.querySelector("p").style.textDecoration = "none";
// }
// function App(){
//   return (
//     <div>
//       <p>Buy milk</p>
//       <button onClick={DOMChangeIfFalse}>None Style</button>
//       <button onClick={DOMChangeIfTrue}>Line through Style</button>
//     </div>
//   )
// } 

export default App;
