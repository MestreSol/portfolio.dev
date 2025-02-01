import styles from "./style.module.css";
import global from "@/global/style.module.css";
import React from "react";
type AboutMeProps = {
  about: string;
};
export default function AboutMe(props: AboutMeProps) {
  return (
    <section className={global.session} id={"about"}>
      <div className={global.sessionTitle}>About Me</div>
      <div className={global.sessionContent}>
        <p className={styles.paragraph}>{props.about}</p>
      </div>
    </section>
  );
}
