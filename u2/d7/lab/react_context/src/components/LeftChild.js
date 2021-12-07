import React, { useContext } from "react";
import LeftGrandChild from "./LeftGrandChild";
import themeContext from "../context/theme_context";

export default function LeftChild() {
  const theme = useContext(themeContext);
  // const { background, color } = theme;
  return (
    <div>
      <p style={theme}>Left Child</p>
      <LeftGrandChild />
    </div>
  );
}
