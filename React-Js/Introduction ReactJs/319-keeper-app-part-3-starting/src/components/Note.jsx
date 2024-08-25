import React from "react";

function Note(props) {
  return (
    <div>
      {props.note.map((noteItem,index)=>{
        return (<div className="note" key={index}>
          <h1>{noteItem.title}</h1>
          <p>{noteItem.content}</p>
          <button onClick={()=>{props.del(index)}}>DELETE</button>
        </div>)
      })}
    </div>
  );
}

export default Note;
