import styles from "./styles.module.css";
import global from "@/global/style.module.css";
import CoworkerList from "../CoworkerList";

type Props = {
  experience: WorkExperience[];
};

export default function WorkExperience({ experience }: Props) {
  return (
    <section className={global.session} id={"workExp"}>
      <div className={global.sessionTitle}>Work Experience</div>
      <div className={global.sessionContent}>
        {experience.map((experience) => (
          <div
            className={styles.experience}
            //onClick={() => handleOpenModal("workExp", experience.id)}
            key={experience.id}
          >
            <div className={styles.experienceHeader}>
              <div className={styles.company}>
                <div className={styles.companyName}>
                  {experience.company.name}
                </div>
                <div className={styles.location}>{experience.location}</div>
              </div>
              <div className={styles.date}>
                {experience.startDate} - {experience.endDate}
              </div>
            </div>
            <div className={styles.experienceContent}>
              <ul className={styles.activetyList}>
                {experience.activities.map((activity) => (
                  <li className={styles.activety} key={activity.id}>
                    {activity.description}
                  </li>
                ))}
              </ul>
            <CoworkerList coWorkers={experience.coWorkers} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
