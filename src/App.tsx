import styles from './App.module.scss'
import { TaskInput } from './components/TaskInput'
import { Tasks } from './components/Tasks'

export default function App() {

  return (
    <main className={styles.container}>
      <TaskInput />
      <Tasks />
    </main>
  )
};
