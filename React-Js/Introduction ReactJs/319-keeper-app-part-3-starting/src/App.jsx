import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [noteList,setNoteList] = useState([]);

  function add(note){
    setNoteList((noteItem)=>{
      return [...noteItem, note]
    });
  }

  function delNote(indexItem){
    setNoteList((noteItem)=>{
      return noteItem.filter((value, index)=>{
        return index !== indexItem
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea add={add}/>
      <Note note={noteList} del={delNote} />
      <Footer />
    </div>
  );
}

export default App;
