import styles from './styles.module.scss';
import { BsCircle, BsCheckCircleFill, BsTrash } from 'react-icons/bs';

export function Task() {
  return (
    <article className={styles.container}>
      <div className={styles.checkBg}>
        <BsCircle color='var(--blue-300)'/>
      </div>
      <p className={styles.open}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt officiis rerum consequuntur fugit quas. Nisi tempore optio cupiditate officia!</p>
      <div className={styles.trashBg}>
        <BsTrash />
      </div>
    </article>
  )
}