import styles from './styles.module.scss'

export function TaskInput() {
  return (
    <form className={styles.container}>
      <input 
        className={styles.input}
        placeholder='Add new task'
      />
      <button 
        type='submit' 
        className={styles.button}
        //onClick={handleAddTask}
      >
        Add
      </button>
    </form>
  )
}