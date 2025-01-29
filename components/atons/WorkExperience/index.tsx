import styles from "@/app/portifolio/page.module.css";
import Image from "next/image";

type Props = {
  experience: WorkExperience[];
};

export default function WorkExperience({ experience }: Props) {
  return (
    <section className={styles.session} id={"workExp"}>
      <div className={styles.sessionTitle}>Work Experience</div>
      <div className={styles.sessionContent}>
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
              <div className={styles.co_workers}>
                <ul className={styles.co_workersList}>
                  {experience.coWorkers.map((coWorker) => (
                    <li className={styles.co_worker} key={coWorker.id}>
                      <Image
                        src={coWorker.avatar}
                        alt={"co-worker"}
                        width={32}
                        height={32}
                        className={styles.co_workerImage}
                      />
                      <p className={styles.co_workerInfo}>
                        <strong>{coWorker.name}</strong>
                        <br />
                        {coWorker.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
