import { useState } from "react";
import "./ShowHidePassword.css";

function ShowHidePassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <div className="password-card">
        <h2>Password Visibility</h2>
        <p>Toggle password visibility with a single click.</p>

        <div className="password-controls">
          <input
            className="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />

          <button className="password-button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowHidePassword;
