import React, { useContext } from "react";
import themeContext from "../context/theme_context";

export default function LeftGreatGrandChild(props) {
  const theme = useContext(themeContext);
  // const { background, color } = theme;
  return (
    <div style={theme}>
      <p>Left Great Grandchild</p>
    </div>
  );
}
