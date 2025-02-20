import Image from 'next/image'
import styles from './style.module.css'
import CoworkerItem from '@/components/atomic/coworkerItem'
type Props = {
  coWorkers: CoWorker[]
}
export default function CoworkerList(props: Props) {
  return (
    <div className={styles.co_workers}>
      <ul className={styles.co_workersList}>
        {props.coWorkers.map((coWorker) => (
          <CoworkerItem coWorker={coWorker} key={coWorker.id} />
        ))}
      </ul>
    </div>
  )
}
