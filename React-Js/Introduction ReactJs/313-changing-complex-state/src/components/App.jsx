import React, {useState} from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullname, setFullName] = useState("");

  const [name, setName] = useState({
    fname: "",
    lname: "",
  });

  function handle(key) {
    const inpname = key.target.value;
    const varName = key.target.name;
    console.log(varName);
    if (varName === "fName") {
      return setName({
        fname: inpname,
        lname: name.lname,
      });
    } else {
      return setName({
        fname: name.fname,
        lname: inpname,
      });
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullname} {name.fname} {name.lname} </h1>
      <form onSubmit={(event)=> {setFullName(firstName+" "+lastName); event.preventDefault()}}>
        <input name="fName" onChange={(key)=>{setFirstName(key.target.value)}}  onChange={handle} placeholder="First Name" />
        <input name="lName" onChange={(key)=>{setLastName(key.target.value)}}  onChange={handle} placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
