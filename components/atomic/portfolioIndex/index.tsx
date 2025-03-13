import styles from './style.module.css'
import React from 'react'

type PortifolioIndiceProps = {
  sections: string[]
}

export default function PortifolioIndice(props: PortifolioIndiceProps) {
  return (
    <div className={styles.index}>
      <div className={styles.indexList}>
        {props.sections.map((section, index) => (
          <div key={index} className={styles.indexItem}>
            {section}
          </div>
        ))}
      </div>
    </div>
  )
}
