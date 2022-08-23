import styles from './styles.module.scss';
import { BsCircle, BsCheckCircleFill, BsTrash } from 'react-icons/bs';
import { TaskDetails } from '../../App';

interface TaskProps {
  task: TaskDetails;
  onComplete: (taskId: string) => void
  onRemove: (taskId: string) => void
}

export function Task({ task, onRemove, onComplete }: TaskProps) {

  return (
    <article className={styles.container}>
      <div className={styles.checkBg} onClick={() => onComplete(task.id)}>
        {
          task.isCompleted
          ? <BsCheckCircleFill color='var(--blue-300)'/>
          : <BsCircle color='var(--blue-300)'/>
        }
      </div>
      <p className={task.isCompleted ? styles.completed : styles.open}>
        {task.description}
      </p>
      <div className={styles.trashBg} onClick={() => onRemove(task.id)}>
        <BsTrash />
      </div>
    </article>
  )
}