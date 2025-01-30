import styles from "@/components/area/InformationArea/style.module.css";
import React from "react";

type Props = {
  skills: Skill[];
}
export default function SkillArea ({ skills }: Props) {
  const getProgressClass = (proficiency: number) => {
    if (proficiency < 33) return styles.low;
    if (proficiency < 66) return styles.medium;
    return styles.high;
  };
  return(
    <section className={styles.skills}>
      <div className={styles.sessionTitle}>Skills</div>
      <div className={styles.sessionContent}>
        <ul className={styles.skillsList}>
          <div>
            {skills.map((skill) => (
              <div className={styles.skill} key={skill.id}>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillProficiency}>
                  <progress
                    value={skill.proficiency}
                    max="100"
                    className={getProgressClass(skill.proficiency)}
                  ></progress>
                </div>
                <div className={styles.skillProjects}>
                  {skill.verified !== "" ? (
                    <div className={styles.skillVerified}>
                      Verified by {skill.verified}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
}
