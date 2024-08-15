import React from "react";
import Algorithm from "./Operation";

export function ShowGreeting() {
  const result = Algorithm();
  return <h1 style={{ color: result.color }}>{result.greeting}</h1>;
}

export default ShowGreeting;
