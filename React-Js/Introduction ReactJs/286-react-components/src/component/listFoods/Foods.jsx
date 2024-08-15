import React from "react";
import ReactDOM from "react-dom";

export function ShowListFood({prod}){
    if (!prod || !Array.isArray(prod)) {
        return <p>No food items available</p>;
    }

    return (
        <ul>
            {prod.map((food) => {
            return <li key={food.id}>{food.name}</li>;
            })}
        </ul>
    )
}
export default ShowListFood;