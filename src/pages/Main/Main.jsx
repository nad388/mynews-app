import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
// import defaultImage from '../../assets/bbc-news.jpeg'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Pagination from '../../components/Pagination/Pagination'
import Sceleton from '../../components/Sceleton/Sceleton'
import styles from './styles.module.css'

const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize)
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}
	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}
	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber)
	}
	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Sceleton count={1} type='banner' />
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
			{/* <img src={defaultImage} alt='news' /> */}
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Sceleton count={10} type='item' />
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</main>
	)
}

export default Main
