import { useState } from "react";
import "./DarkLightMode.css";

function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Change Theme</button>
    </div>
  );
}

export default DarkLightMode;
