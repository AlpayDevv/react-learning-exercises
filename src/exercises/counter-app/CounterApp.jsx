import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button
          className="increment"
          onClick={() => {
            if (count < 10) {
              setCount(count + 1);
            }
          }}
        >
          Increment
        </button>
        <button
          className="decrement"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
