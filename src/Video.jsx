import reactLogo from "./assets/react.svg";

function Video() {
  return (
    <>
      <div className="video">
        <img className="video-image" src={reactLogo} alt="Video image" />
        <p>Video 1</p>
        <p>React JS</p>
        <div className="video-footer">
          <p>Linkes: 0</p>
          <button>like</button>
        </div>
      </div>
    </>
  );
}

export default Video;