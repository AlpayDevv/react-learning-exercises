import { useState } from "react";
import "./CharacterCounter.css";

function CharacterCounter() {
  const [text, setText] = useState("");
  const maxLength = 100;
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1>Character Counter</h1>
        <textarea
          className="counter-textarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          maxLength={100}
        ></textarea>
        <p>Characters: {text.length}</p>
        <p style={{ color: text.length === 100 ? "red" : text.length >= 80 ? "orange" : "black" }}>
          Remaining: {text.length === 100 ? "Limit reached!" : maxLength - text.length}
        </p>
      </div>
    </div>
  );
}

export default CharacterCounter;
