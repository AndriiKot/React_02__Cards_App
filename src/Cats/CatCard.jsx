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
        <img className="card-image-{id}" src={src} alt={alt} />
        <p>{title}</p>
        <div className="cat-footer">
          <p>Linkes: {likes}</p>
          <button onClick={increaseByOneLike}>like</button>
        </div>
      </div>
    </>
  );
}

export default CatCard;
