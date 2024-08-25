import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:"",
    content: "",
});


  function handle(key){
    const {name, value} = key.target

    setNote((noteItem)=>{
      return {...noteItem, [name]:value};
    })
  }

  return (
    <div>
      <form onSubmit={(event)=>event.preventDefault()}>
        <input name="title" value={note.title} placeholder="Title" onChange={handle} />
        <textarea name="content" value={note.content} placeholder="Take a note..." rows="3" onChange={handle}/>
        <button onClick={()=>{props.add(note);setNote({title: "", content:""})}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
