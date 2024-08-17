import React from "react";

export function Icon({ props }) {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.emoji}
    </span>
  );
}

export default Icon;