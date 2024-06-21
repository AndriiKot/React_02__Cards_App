import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const number = "02";
  const name = [
    "Andrii",
  ]
  return (
    <>
    {name} {/* name.join('') */}
    
      <h1>
        Only React {number} <img src={reactLogo} alt="React" />
      </h1>
    </>
  );
}

export default App;
