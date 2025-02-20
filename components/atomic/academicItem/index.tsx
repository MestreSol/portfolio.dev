import styles from './style.module.css'
import React from 'react'

type Props = {
  academic: AcademicExperience
}
function AcademicItem({ academic }: Props) {
  return (
    <div className={styles.academic} key={academic.id}>
      <div className={styles.academicHeader}>
        <div className={styles.institution}>
          <div className={styles.institutionName}>{academic.institution}</div>
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
  )
}

export { AcademicItem }
