import { useState } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai';

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.scss'
import { Task } from './components/Task';
import { TaskInput } from './components/TaskInput';

export type TaskDetails = {
  id: string;
  description: string;
  isCompleted: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  function handleAddTask(taskDescription: string){

    if(taskDescription === '') {
      return alert('Write something!');
    }

    setTasks(prevState => [
      ...prevState, {
        id: uuidv4(),
        description: taskDescription,
        isCompleted: false,
      }
    ]);
  };

  function handleRemoveTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  };

  function toggleCompletedTask(taskId: string) {
    const newTasks = tasks.map(task => {
      if(taskId === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      };
      return task;
    });
    setTasks(newTasks);
  };

  function completedTasks() {
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    return completedTasks;
  }

  return (
    <main className={styles.container}>
      <TaskInput handleAddTask={handleAddTask} />

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

    </main>
  )
};
