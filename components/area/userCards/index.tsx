import styles from "./UserCard.module.css";
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
        <div className={styles.userCard}>
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
      <div className={styles.userInformation}>
        <div className={styles.userName}>{props.name}</div>
        <hr className={styles.line} />
        <div className={styles.userDescription}>{props.description}</div>
        <div className={styles.userMetrics}>
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
      <div className={styles.social}>
        <a className={styles.socialItem} href="github.com">
          <Image
            src="/icons/github.svg"
            alt="Github"
            className={styles.socialIcon}
            width={30}
            height={30}
          />
        </a>
        <a className={styles.socialItem} href="https://www.linkedin.com/">
          <Image
            src="/icons/linkedin.svg"
            alt="Linkedin"
            className={styles.socialIcon}
            width={30}
            height={30}
          />
        </a>
        <a className={styles.socialItem} href="https://www.instagram.com/">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            className={styles.socialIcon}
            width={30}
            height={30}
          />
        </a>
      </div>
      <div>
        <button className={styles.followButton}>Follow</button>
      </div>
    </div>
  );
}
