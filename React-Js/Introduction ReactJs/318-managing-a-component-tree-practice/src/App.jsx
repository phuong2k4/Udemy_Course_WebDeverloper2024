import React, { useState } from "react";
import TodoList from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function removeItems(pos){
    setItems((item)=>{
      return item.filter((value, index)=>{
        return index !== pos;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea add={addItem}/>
      <div>
        <TodoList props={items} func={removeItems}/> 
      </div>
    </div>
  );
}

export default App;
