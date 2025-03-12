type Props = {
  academic: AcademicExperience
}
export default function AcademicCard(props: Props) {
  return (
    <div>
      <p>{props.academic.course}</p>
    </div>
  )
}
