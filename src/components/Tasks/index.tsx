import styles from './styles.module.scss';

export function Tasks() {
  return (
    <section className={styles.container}>

      <div className={styles.tasksInfo}>
        <div className={styles.createdTasks}>
          <p className={styles.createdTitle}>Created</p>
          <span>
            <p>0</p>
          </span>
        </div>
        <div className={styles.completedTasks}>
          <p className={styles.completedTitle}>Completed</p>
          <span>
            <p>0</p>
          </span>
        </div>
      </div>

      <div className={styles.tasksList}></div>

    </section>
  )
}