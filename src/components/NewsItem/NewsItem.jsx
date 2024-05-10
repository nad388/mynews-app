import { formatTimeAgo } from '../../helpers/formatTimeAgo'
// import defaultImage from '/bbc-news.jpeg'
import defaultImage from '../../assets/bbc-news.jpeg'
import styles from './newsItem.module.css'

const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				// style={{ backgroundImage: `url(${item.image})` }}
			>
				{item.image ? (
					<img src={item.image} alt='news' className={styles.wrapper} />
				) : (
					<img src={defaultImage} alt='news' className={styles.wrapper} />
				)}
			</div>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}

export default NewsItem
