import React from "react";

export function Algorithm() {
  const date = new Date();
  const currentTime = date.getHours();

  const customStyle = {
    color: "",
    greeting: "",
  };

  if (currentTime < 12) {
    customStyle.greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    customStyle.greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    customStyle.greeting = "Good Night";
    customStyle.color = "blue";
  }
  return customStyle;
}

export default Algorithm;
    