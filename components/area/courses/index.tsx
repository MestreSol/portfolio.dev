import styles from './CoursesArea.module.css'
import global from '@/global/style.module.css'
import React from 'react'

// Define the props type for the component
type Props = {
  courses: Course[]
}

// Functional component to render the courses area
export default function CoursesArea({ courses }: Props) {
  return (
    <section className={global.licenses}>
      <div className={global.sessionTitle}>Licenses and Courses</div>
      <div className={global.sessionContent}>
        {courses.map((course) => (
          <div className={styles.license} key={course.id}>
            <div className={styles.licenseHeader}>
              <div className={styles.licenseInfo}>
                <div className={styles.licenseName}>{course.name}</div>
                <div className={styles.licensor}>{course.emissor}</div>
              </div>
              <div className={styles.date}>
                {course.startDate} - {course.endDate}
              </div>
            </div>
            <div className={styles.licenseContent}>
              <p className={styles.licenseDescription}>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
