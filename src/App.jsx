import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const number = "02";
  return (
    <>
      <div className="video-container">
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
        <div className="video">
          <img className="video-image" src={reactLogo} alt="Video image" />
          <p>Video 1</p>
          <p>React JS</p>
          <div className="video-footer">
            <p>Linkes: 0</p>
            <button>like</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
