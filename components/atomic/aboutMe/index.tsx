import Session from "@/components/atomic/session";
import styles from "./style.module.css";
import React from "react";
type AboutMeProps = {
  about: string;
};
export default function AboutMe(props: AboutMeProps) {
  return (
    <Session id="about-me" title="About Me">
      <p className={styles.paragraph}>{props.about}</p>
    </Session>
  );
}
