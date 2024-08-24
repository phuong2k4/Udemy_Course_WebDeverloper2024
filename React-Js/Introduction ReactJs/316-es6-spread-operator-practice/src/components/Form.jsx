import React, { useState } from "react";

export function Form() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleInp(key) {
    const value = key.target.value;
    setTodo(value);
  }
  function handleBtn() {
    setTodoList([...todoList, todo]);
    document.querySelector(".clear").value = "";
  }
  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input type="text" className="clear" onChange={handleInp} />
        <button type="submit" onClick={handleBtn}>
          <span>Add</span>
        </button>
      </form>

      <ul>
        {todoList.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Form;