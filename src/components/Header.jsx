import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
  };

  return (
    <div style={style}>
      <h2>Header</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}