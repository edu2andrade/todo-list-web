import { FormEvent, useState } from 'react';

import styles from './styles.module.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface TaskInputProps {
  handleAddTask: (taskDescription: string) => void;
}

export function TaskInput({ handleAddTask }: TaskInputProps) {
  const [description, setDescription] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleAddTask(description);
    setDescription('');
  }

  return (
    <form className={styles.formContainer}>
      <input
        className={styles.input}
        placeholder='Add new task'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button 
        type='submit' 
        className={styles.button}
        onClick={handleSubmit}
      >
        Add
        <AiOutlinePlusCircle />
      </button>
    </form>
  )
}