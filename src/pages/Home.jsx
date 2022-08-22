import React, { useContext, useEffect } from 'react'
import Filter from '../components/Filter'
import { NewsContext } from '../context/newsState'
import Loading from '../components/Loading'
import NewsHome from '../components/NewsHome'
import './Home.css'


const Home = () => {

    const { news, getNews } = useContext(NewsContext)

    useEffect(() => {
      getNews()
        //eslint-disable-next-line
    }, [])


    
  return (
    <div className='news_home'>
      <header className='home_header'>
        <Filter />
      </header>
      <main>
        {/* Loading if news is empty else show the news */}
        { (Object.keys(news).length === 0) ? <Loading /> : <NewsHome />}
      </main>
      <footer>
        {/* ADD PAGEs  , NEXT & PREVIOS PAge section */}
      </footer>
    </div>
  )
}

export default Home
