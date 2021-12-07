import React, { useState } from "react";
import LeftComp from "./components/LeftComp";
import RightComp from "./components/RightComp";
import themeContext from "./context/theme_context";
import "./styles.css";

const themes = {
  light: {
    background: "lightblue",
    color: "black",
  },
  dark: {
    background: "#222222",
    color: "white",
  },
};

function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);

  const changeTheme = () => {
    activeTheme.background === "lightblue"
      ? setActiveTheme(themes.dark)
      : setActiveTheme(themes.light);
  };
  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button onClick={changeTheme}>Toggle Themes</button>
      <div className="children">
        <themeContext.Provider value={activeTheme}>
          <LeftComp />
          <RightComp />
        </themeContext.Provider>
      </div>
    </div>
  );
}

export default App;
