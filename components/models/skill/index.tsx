import React from 'react'
import styles from '@/app/portfolio/page.module.css'
type ModalProps = {
  isOpen: boolean
  onClose: () => void
  skill: Skill
}
export default function SkillModal({ isOpen, onClose, skill }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{skill.name}</h2>
          </div>
          <div>
            <p className={styles.modalInfo}>{skill.proficiency}</p>
          </div>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>
            {skill.description}
            Used in {skill.projects} Projects Skill Verified by {skill.verified}
            Used in {skill.works} Works
          </p>
          <div className={styles.coWorkers}></div>
        </div>
      </div>
    </div>
  )
}
