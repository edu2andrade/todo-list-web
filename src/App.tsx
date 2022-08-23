import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.scss'

import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

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

  return (
    <main className={styles.container}>
      <TaskInput handleAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        handleRemoveTask={handleRemoveTask} 
        toggleCompletedTask={toggleCompletedTask}
      />
    </main>
  )
};
