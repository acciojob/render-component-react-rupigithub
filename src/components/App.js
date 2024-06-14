import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [currState,setState] = useState();
  const renderText = ()=>{
   return  setState("I am learning React. My life is getting better.")
  }
  return (
    <div id="main">
      <h1>React Rendering App</h1>
      <p><b>{currState}</b></p>
      <button onClick={renderText}>Click me</button>
    </div>
  )
}


export default App;
