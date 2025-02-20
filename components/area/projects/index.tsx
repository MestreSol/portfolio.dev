import Image from 'next/image'
import React from 'react'
import styles from './style.module.css'
import global from '@/global/style.module.css'
import CoworkerList from '@/components/area/coworkers'
import TeamList from '@/components/area/teams'

type Props = {
  projects: Project[]
}
export default function ProjectArea({ projects }: Props) {
  return (
    <section className={styles.projects}>
      <div className={global.sessionTitle}>Projects</div>
      <div className={global.sessionContent}>
        <ul className={global.projectsList}>
          <div>
            {projects.map((projects) => (
              <div className={styles.project} key={projects.id}>
                <div className={styles.projectHeader}>
                  <h2 className={styles.projectName}>{projects.name}</h2>
                  <div className={styles.projectDate}>
                    {projects.startDate} - {projects.endDate}
                  </div>
                </div>
                <div className={styles.projectDescriptionArea}>
                  <div className={styles.projectAbout}>{projects.about}</div>
                  <Image
                    src={projects.image}
                    width={400}
                    height={200}
                    alt="project"
                    className={styles.projectImage}
                  ></Image>
                </div>
                <TeamList teams={projects.Team} />
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  )
}
