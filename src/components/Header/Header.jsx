import { formatDate } from '../../helpers/formatDate'
import styles from './header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>MY NEWS APP</h1>
			<p className={styles.date}>{formatDate(new Date())}</p>
		</header>
	)
}

export default Header
