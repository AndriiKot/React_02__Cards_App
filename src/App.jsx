import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const number = "02";
  return (
    <>
    <div>
      <div>
        <img src={reactLogo} alt="Video image" />
        <p>Video 1</p>
        <p>React JS</p>
        <div>
          <p>Linkes: 0</p>
          <button>like</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
