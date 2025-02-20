import styles from './styles.module.css'
import Image from 'next/image'

type Props = {
  coWorker: CoWorker
}
function CoworkerItem({ coWorker }: Props) {
  return (
    <li className={styles.co_worker} key={coWorker.id}>
      <Image
        src={coWorker.avatar}
        alt={'co-worker'}
        width={32}
        height={32}
        className={styles.co_workerImage}
      />
      <p className={styles.co_workerInfo}>
        <strong>{coWorker.name}</strong>
        <br />
        {coWorker.role}
      </p>
    </li>
  )
}

export default CoworkerItem
