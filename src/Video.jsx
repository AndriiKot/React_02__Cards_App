import reactLogo from "./assets/react.svg";

function Video(props) {
    const { title } = props;
  return (
    <>
      <div className="video">
        <img className="video-image" src={reactLogo} alt="Video image" />
        <p>{title}</p>
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