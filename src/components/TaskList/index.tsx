import { Task } from '../Task'

import styles from './styles.module.scss'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import { TaskDetails } from '../../App';

interface TaskListProps {
  tasks: TaskDetails[];
  handleRemoveTask: (taskId: string) => void;
  toggleCompletedTask: (taskId: string) => void;
}

export function TaskList({ tasks, handleRemoveTask, toggleCompletedTask }: TaskListProps) {

  function completedTasks() {
    // Using Filter:
    // const completedTasks = tasks.filter(task => task.isCompleted).length;

    // Using Reduce (much more powerfull):
    const completedTasks = tasks.reduce((completed, allTasks) => {
      return completed + Number(allTasks.isCompleted)
    }, 0)
    return completedTasks;
  }

  return (
    <section className={styles.taskListContainer}>

    <div className={styles.tasksInfo}>
      <div className={styles.createdTasks}>
        <p className={styles.createdTitle}>Created</p>
        <span>
          <p>{tasks.length}</p>
        </span>
      </div>
      <div className={styles.completedTasks}>
        <p className={styles.completedTitle}>Completed</p>
        <span>
          <p>{completedTasks()} of {tasks.length}</p>
        </span>
      </div>
    </div>

    <div className={styles.tasksList}>

    {
      tasks.length !== 0
      ? (
        tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onRemove={handleRemoveTask}
            onComplete={toggleCompletedTask}
          />
        ))
      )
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