import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [flag,setFlag] = useState(false)

  console.log(flag)
  return (
    <div id="main">
      
      <button id="click"
      onClick={()=>{setFlag(true)}}
      > Submit</button>
      {
        flag&& <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
      }
    </div>

  );
}


export default App;
