import WorkExperienceCard from '@/components/atomic/workExperienceCard'
import global from '@/global/style.module.css'

type Props = {
  experience: WorkExperience[]
}

export default function WorkExperienceArea({ experience }: Props) {
  return (
    <section className={global.session} id={'workExp'}>
      <div className={global.sessionTitle}>Work Experience</div>
      <div className={global.sessionContent}>
        {experience.map((experience) => (
          <WorkExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}
