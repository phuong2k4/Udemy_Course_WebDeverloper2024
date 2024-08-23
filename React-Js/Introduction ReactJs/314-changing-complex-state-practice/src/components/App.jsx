import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handle(info){
    const value = info.target.value;
    const name = info.target.name;
    setContact((prev)=>(
        {
          ...prev,
          [name]: value
          
        }
    ))
}

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handle} placeholder="First Name" />
        <input name="lName" onChange={handle} placeholder="Last Name" />
        <input name="email" onChange={handle} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
