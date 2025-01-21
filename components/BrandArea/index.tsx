import React from "react";
import "./styles.css";

export default function Logo() {
  function RenderLogo() {
    // Get PC Theme
    const theme = localStorage.getItem("theme");
    if (theme === "dark")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg";
    else
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg";
  }
  return (
    <div className="BrandArea">
      <img className="logo" alt="Logo" src={RenderLogo()} />
      <h1>Potify</h1>
    </div>
  );
}
