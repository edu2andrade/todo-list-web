import styles from'./styles.module.scss'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={Logo} alt='Todo List logo' />
    </header>
  )
}