import Image from "next/image";
import styles from "./style.module.css"
type Props = {
  coWorkers: CoWorker[];
}
export default function CoworkerList(props: Props) {
  return(
    <div className={styles.co_workers}>
                <ul className={styles.co_workersList}>
                  {props.coWorkers.map((coWorker) => (
                    <li className={styles.co_worker} key={coWorker.id}>
                      <Image
                        src={coWorker.avatar}
                        alt={"co-worker"}
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
                  ))}
                </ul>
              </div>
  );
}
