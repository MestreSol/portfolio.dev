import styles from './InformationArea.module.css'
import React from 'react'
import AboutMe from '@/components/atons/AboutMe'
import { useModal } from '@/context/ModalContext'
import Modal from './Modal'
import WorkExperience from '@/components/area/WorkExperienceArea'
import AcademicArea from '@/components/area/AcademicArea'
import CoursesArea from '@/components/area/CoursesArea'
import SkillArea from '@/components/area/SkillArea'
import LanguageArea from '@/components/area/LanguageArea'
import ProjectArea from './ProjectArea'
type Props = {
  profile: Profile
}

export default function InformationArea({ profile }: Props) {
  const { isModalOpen, openModal, closeModal } = useModal()

  const handleOpenModal = (type: string, id: number) => {
    if (type === 'workExp') {
      const experience = profile.workExperience.find(
        (experience) => experience.id === id
      )
      console.log(experience)
    } else if (type === 'recomendation') {
      console.log('Recomendation')
    }

    openModal()
  }

  return (
    <div className={styles.informationArea}>
      {profile.about && <AboutMe about={profile.about} />}
      {profile.workExperience && (
        <WorkExperience experience={profile.workExperience} />
      )}
      {profile.academicExperience && (
        <AcademicArea academicArray={profile.academicExperience} />
      )}
      {profile.courses && <CoursesArea courses={profile.courses} />}
      {profile.languages ? (
        <LanguageArea languages={profile.languages} />
      ) : null}
      {profile.skills ? <SkillArea skills={profile.skills} /> : null}
      {profile.projects ? <ProjectArea projects={profile.projects} /> : null}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        skill={profile.skills[0]}
      />
    </div>
  )
}
