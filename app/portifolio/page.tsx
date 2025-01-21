import React from "react";
import Profile from "@/components/Profile";
import style from "./page.module.css";

export default function Portifolio() {
  return (
    <div>
      <div className={style.container}>
        <Profile />
      </div>
    </div>
  );
}
