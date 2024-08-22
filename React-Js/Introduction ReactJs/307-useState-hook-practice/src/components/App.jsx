import {React, useState} from "react";



function App() {
  const time = new Date().toLocaleTimeString();
  const [localtime, setLocalTime] = useState(time);
  console.log(localtime);

  setInterval(()=>{
    setLocalTime(new Date().toLocaleTimeString())
  },1000)
  
  return (
    <div className="container">
      <h1>{localtime}</h1>
      <button
        onClick={() => {
          setLocalTime(new Date().toLocaleTimeString());
        }}
      >
        Get Time
      </button>
    </div>
  )
}
export default App;
