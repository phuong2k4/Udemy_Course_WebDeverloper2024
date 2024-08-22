import React, {useState} from "react";
const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];


function Animals(){
  const [cat, setCat] = useState(animals[0]);
  console.log(cat);
  return(
    <div>asd</div>
  );
}

export default Animals;