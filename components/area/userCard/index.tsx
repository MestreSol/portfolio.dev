import styles from "@/app/portifolio/page.module.css";
import Image from "next/image";
import React from "react";
type User = {
  name: string;
  description: string;
  cover: string;
  avatar: string;
  nodes: number;
  followers: number;
  projects: number;
};
export default function UserCard(props: User) {
  return (
    <div className={styles.user}>
      <div className={styles.userArea}>
        <div className={styles.cover}>
          <Image
            src={props.cover}
            alt={"Cover"}
            className={styles.coverImage}
            width={200}
            height={200}
          />
          <Image
            src={props.avatar}
            alt="Avatar"
            className={styles.userImage}
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.userName}>{props.name}</div>
        <hr className={styles.line} />
        <div className={styles.description}>{props.description}</div>
        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Nodes</div>
            <div className={styles.metric}>{props.nodes}</div>
          </div>
          <hr className={styles.verticalLine} />
          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Followers</div>
            <div className={styles.metric}>{props.followers}</div>
          </div>
          <hr className={styles.verticalLine} />
          <div className={styles.metricItem}>
            <div className={styles.metricTitle}>Projects</div>
            <div className={styles.metric}>{props.projects}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
