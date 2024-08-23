import React, { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onSubmit={(event)=>{setHeading(name); event.preventDefault()}}>
        <input type="text" onChange={(key)=>setName(key.target.value)} placeholder="What's your name?" />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
