import React from "react";
import "./styles.css";
import Image from "next/image";

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
      <Image src={RenderLogo()} alt={"Portfy Logo"} />
      <h1>Potify</h1>
    </div>
  );
}
