import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  function handleLike() {
    if (isLiked) {
      setLikeCount((previousCount) => previousCount - 1);
    } else {
      setLikeCount((previousCount) => previousCount + 1);
    }

    setIsLiked(!isLiked);
  }
  return (
    <div className="like-container">
      <div className="like-card">
        <h1>Like Button</h1>
        <div className="like-icon-wrapper">
          <button className="like-button" onClick={handleLike}>
            {isLiked ? "❤️" : "♡"}
          </button>
        </div>
        <p>{likeCount} Likes</p>
      </div>
    </div>
  );
}

export default LikeButton;
