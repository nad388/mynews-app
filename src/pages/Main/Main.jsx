import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import styles from './styles.module.css'
// import defaultImage from '/bbc-news.jpeg'
import defaultImage from '../../assets/bbc-news.jpeg'

const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])
	return (
		<main className={styles.main}>
			{news.length > 0 ? (
				<NewsBanner item={news[0]} />
			) : (
				<img src={defaultImage} alt='news' />
			)}
			<NewsList news={news} />
		</main>
	)
}

export default Main
