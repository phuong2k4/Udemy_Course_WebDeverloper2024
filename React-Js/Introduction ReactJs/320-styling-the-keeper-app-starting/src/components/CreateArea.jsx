import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import Add from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  const [condition,setCondition] = useState(false);
  const [row, setRow] = useState("1")
  function change(){
    setCondition(condt=>!condt)
    setRow("3")
    document.querySelector(".inp-js").classList.add("show")
  }
  return (
    <div>
      <form className="create-note">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="inp-js"
          />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={row}
          className="text-js"
          onClick={change}
        />
        <Zoom in={condition}>
          <Fab onClick={submitNote} className="btn-js inp-js">
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
