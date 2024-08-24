import React from "react";
import { useState } from "react";

export function TodoList({props,func}){
    const [isDone, setIsDone] = useState(false)
    function handle(){
        setIsDone(done=>!done);
    }

    //<li key={index} onClick={handle} style={{textDecoration: isDone ? "line-through" : "none"}}>{todoItem} </li>

    return (
        <ul>
            {props.map((todoItem,index) => {
                return <li key={index} onClick={()=>{func(index)}}>{todoItem}</li>
            })}
        </ul>
    );
}

export default TodoList;