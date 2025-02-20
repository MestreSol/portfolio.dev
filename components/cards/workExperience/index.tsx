import React from 'react'
import styles from './styles.module.css'
import CoworkerList from '@/components/area/coworkers'

type Props = {
  experience: WorkExperience
}
export default function WorkExperienceCard({ experience }: Props) {
  return (
    <div
      className={styles.experience}
      //TODO: Implement handleOpenModal
      //onClick={() => handleOpenModal("workExp", experience.id)}
      key={experience.id}
    >
      <div className={styles.experienceHeader}>
        <div className={styles.company}>
          <div className={styles.companyName}>{experience.company.name}</div>
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
        {experience.coWorkers.length > 0 && (
          <CoworkerList coWorkers={experience.coWorkers} />
        )}
      </div>
    </div>
  )
}
