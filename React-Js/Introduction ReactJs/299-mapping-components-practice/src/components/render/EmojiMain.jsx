import React from "react";
import emojipedia from "../emojipedia.js";
import Icon from "./renderEmoji/RenderIcon.jsx";
import Name from "./renderEmoji/RenderName.jsx";
import Meaning from "./renderEmoji/RenderMeaning.jsx";

export function RenderEmoji() {
  return (
    <dl className="dictionary">
      {emojipedia.map((emoji) => {
        return (
          <div className="term" key={emoji.id}>
            <dt>
              <Icon props={emoji} />
              <Name props={emoji} />
            </dt>
            <Meaning props={emoji} />
          </div>
        );
      })}
    </dl>
  );
}

export default RenderEmoji;
