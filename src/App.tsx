import styles from './App.module.scss'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'

export default function App() {

  return (
    <main className={styles.container}>
      <TaskInput />
      <TaskList />
    </main>
  )
};
