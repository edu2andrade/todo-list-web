import styles from './App.module.scss'
import { TaskInput } from './components/TaskInput'

export default function App() {

  return (
    <main className={styles.container}>
      <TaskInput />
      <h1>Tasks</h1>
    </main>
  )
};
