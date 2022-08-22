import { AiOutlineUnorderedList } from 'react-icons/ai';
import { Task } from '../Task';

import styles from './styles.module.scss';

export function TaskList() {
  const isTask = true;

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

      <div className={styles.tasksList}>

      {
        isTask
        ? <Task />
        : (
          <div className={styles.emptyList}>
          <AiOutlineUnorderedList size={56} />
          <span>You don't have any tasks created.</span>
          <p>Add tasks and organize your day!</p>
        </div>
        )
      }
        
      </div>

    </section>
  )
}