import styles from './style.module.css'
import React from 'react'
import AboutMe from '@/components/area/about'
import { useModal } from '@/context/modal'
import Modal from '@/components/area/modal'
import WorkExperience from '@/components/area/workExperience'
import { Academic } from '@/components/area/academic'
import CoursesArea from '@/components/area/courses'
import SkillArea from '@/components/area/skills'
import LanguageArea from '@/components/area/languages'
import ProjectArea from '@/components/area/projects'

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
        <Academic academicArray={profile.academicExperience} />
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
