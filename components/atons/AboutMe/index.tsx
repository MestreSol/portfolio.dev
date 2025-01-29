import styles from "@/app/portifolio/page.module.css";
import React from "react";
type AboutMeProps = {
  about: string;
};
export default function AboutMe(props: AboutMeProps) {
  return (
    <section className={styles.session} id={"about"}>
      <div className={styles.sessionTitle}>About Me</div>
      <div className={styles.sessionContent}>
        <p className={styles.paragraph}>{props.about}</p>
      </div>
    </section>
  );
}
