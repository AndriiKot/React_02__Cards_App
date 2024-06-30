import { useState } from "react";
import "./CatCard.css";

function CatCard(props) {
  const { id, src, alt, title } = props;
  const [likes, setLikes] = useState(0);

  function increaseByOneLike() {
    setLikes((like) => like + 1);
  }

  return (
    <>
      <div className="cat-image-card">
        <img className="cat-image" src={src} alt={alt} />
        <div className="cat-footer">
          <p>{title}</p>
          <div className="likes">
            <p>Linkes: {likes}</p>
            <button onClick={increaseByOneLike}>like</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatCard;
