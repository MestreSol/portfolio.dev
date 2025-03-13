import styles from './style.module.css'
import global from '@/global/style.module.css'
import React from 'react'

type Props = {
  languages: Language[]
}
export default function LanguageArea({ languages }: Props) {
  const getProgressClass = (proficiency: number) => {
    if (proficiency < 33) return styles.low
    if (proficiency < 66) return styles.medium
    return styles.high
  }
  return (
    <section className={styles.skills}>
      <div className={global.sessionTitle}>Languages</div>
      <div className={global.sessionContent}>
        <ul className={styles.skillsList}>
          <div>
            {languages.map((skill) => (
              <div className={styles.skill} key={skill.id}>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillProficiency}>
                  <progress
                    value={skill.proficiency}
                    max="100"
                    className={getProgressClass(skill.proficiency)}
                  ></progress>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  )
}
