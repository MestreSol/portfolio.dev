import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

type Props = {
  teams: Team[];
};
export default function TeamList({ teams }: Props) {
  return (
    <div className={styles.teamList}>
      {teams.map((team) => (
        <div className={styles.team} key={team.id}>
          <Image
            src={team.image}
            width={400}
            height={200}
            alt="team"
            className={styles.teamImage}
          ></Image>
          <div>
            <h2 className={styles.teamName}>{team.name}</h2>
            <div className={styles.teamAbout}>{team.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
