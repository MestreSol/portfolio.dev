import React from 'react'

import WorkExperienceModal from '@/components/models/workExperience'
import SkillModal from '@/components/models/skill'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
  experience?: WorkExperience
  skill?: Skill
}
export default function Modal({
  isOpen,
  onClose,
  experience,
  skill
}: ModalProps) {
  if (!isOpen) return null

  return (
    <div>
      {experience ? (
        <WorkExperienceModal
          isOpen={isOpen}
          onClose={onClose}
          experience={experience}
        />
      ) : skill ? (
        <SkillModal isOpen={isOpen} onClose={onClose} skill={skill} />
      ) : null}
    </div>
  )
}
