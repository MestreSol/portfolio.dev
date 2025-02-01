import styles from "./CoursesArea.module.css";
import global from "@/global/style.module.css";
import React from "react";

type Props = {
  courses: Course[];
};

export default function CoursesArea({ courses }: Props) {
  return (
    <section className={global.licenses}>
      <div className={global.sessionTitle}>Licenses and Courses</div>
      <div className={global.sessionContent}>
        {courses.map((license) => (
          <div className={styles.license} key={license.id}>
            <div className={styles.licenseHeader}>
              <div className={styles.licenseInfo}>
                <div className={styles.licenseName}>{license.name}</div>
                <div className={styles.licensor}>{license.emissor}</div>
              </div>
              <div className={styles.date}>
                {license.startDate} - {license.endDate}
              </div>
            </div>
            <div className={styles.licenseContent}>
              <p className={styles.licenseDescription}>{license.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
