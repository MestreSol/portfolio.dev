import styles from './styles.module.css'

type Props = {
  course: Course
}

function CoursesItem({ course }: Props) {
  return (
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
  )
}

export default CoursesItem
