import CoursesItem from '@/components/atomic/coursesItem'
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
          <CoursesItem course={course} key={course.id} />
        ))}
      </div>
    </section>
  )
}
