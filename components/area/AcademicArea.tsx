import styles from "./style.module.css";
import global from "@/global/style.module.css";
import React from "react";

// Define the props type for the component
type Props = {
  academicArray: AcademicExperience[];
};

// Functional component to render the academic area
export default function AcademicArea({ academicArray }: Props) {
  return (
    <section className={global.session} id={"academic"}>
      <div className={global.sessionTitle}>Academic</div>
      <div className={global.sessionContent}>
        {academicArray.map((academic: AcademicExperience) => (
          <div className={styles.academic} key={academic.id}>
            <div className={styles.academicHeader}>
              <div className={styles.institution}>
                <div className={styles.institutionName}>
                  {academic.institution}
                </div>
                <div className={styles.course}>{academic.course}</div>
              </div>
              <div className={styles.date}>
                {academic.startDate} - {academic.endDate}
              </div>
            </div>
            <div className={styles.academicContent}>
              {academic.degree && (
                <div className={styles.note}>Note: {academic.degree}</div>
              )}
              <ul className={styles.subjectsList}>
                {academic.activities.map((subject) => (
                  <li className={styles.subject} key={subject.id}>
                    {subject.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
