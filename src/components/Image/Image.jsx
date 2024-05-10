// import defaultImage from '../../../public/bbc-news.jpeg'
import defaultImage from '../../assets/bbc-news.jpeg'
import styles from './image.module.css'

const Image = ({ image }) => {
	return (
		<div className={styles.wrapper}>
			{image ? (
				<img src={image} alt='news' className={styles.image} />
			) : (
				<img src={defaultImage} alt='news' className={styles.image} />
			)}
		</div>
	)
}

export default Image
