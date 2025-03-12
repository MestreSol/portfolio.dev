import Image from 'next/image'
import React from 'react'
import styles from '@/app/portfolio/page.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  experience: WorkExperience
}

export default function WorkExperienceModal({
  onClose,
  experience
}: ModalProps) {
  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>{experience.company.name}</h2>
            <p className={styles.modalSubTitle}>{experience.location}</p>
          </div>
          <div>
            <p className={styles.modalInfo}>{experience.location}</p>
            <p className={styles.modalDate}>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>
            {experience.activities.map((activity) => (
              <li key={activity.id}>{activity.description}</li>
            ))}
          </p>
          <div className={styles.coWorkers}>
            {experience.coWorkers.map((coWorker) => (
              <div className={styles.coWorker} key={coWorker.id}>
                <Image
                  src={coWorker.avatar}
                  alt={'co-worker'}
                  width={32}
                  height={32}
                  className={styles.coWorkerImage}
                />
                <p className={styles.coWorkerInfo}>
                  <strong>{coWorker.name}</strong>
                  <br />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
