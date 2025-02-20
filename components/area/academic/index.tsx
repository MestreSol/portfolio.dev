import { AcademicItem } from '@/components/atomic/academicItem'
import global from '@/global/style.module.css'
import React from 'react'

// Define the props type for the component
type Props = {
  academicArray: AcademicExperience[]
}

// Functional component to render the academic area
function Academic({ academicArray }: Props) {
  return (
    <section className={global.session} id={'academic'}>
      <div className={global.sessionTitle}>Academic</div>
      <div className={global.sessionContent}>
        {academicArray.map((academic: AcademicExperience) => (
          <AcademicItem academic={academic} key={academic.id} />
        ))}
      </div>
    </section>
  )
}

export { Academic }
