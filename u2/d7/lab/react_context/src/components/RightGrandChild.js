import React, { useContext } from "react";
import themeContext from "../context/theme_context";

export default function RightGrandChild(props) {
  const theme = useContext(themeContext);
  // const { background, color } = theme;
  return <div style={theme}>Right Grandchild</div>;
}
