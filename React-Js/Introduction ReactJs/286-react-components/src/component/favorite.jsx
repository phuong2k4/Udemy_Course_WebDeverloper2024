import React from "react";
import ShowListFood from "./listFoods/Foods.jsx";

export function FavoriteFoods() {
    const listFood = [
        {
        id: 1,
        name: "Bacon",
        },
        {
        id: 2,
        name: "Jamon",
        },
        {
        id: 3,
        name: "Noodles",
        },
];

  return (
    <div>
      <ShowListFood prod={listFood}/>
    </div>
  );
}

export default FavoriteFoods;
