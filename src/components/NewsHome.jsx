import React, { useContext } from 'react'
import { NewsContext } from '../context/newsState'
import NewsItem from './NewsItem/NewsItem';

const NewsHome = () => {
    const { news , setnews, getNews} = useContext(NewsContext)

  const prevPage = () => {
    setnews({})
    getNews('hacker','story',news.page - 1)
  }
  const nxtPage = () => {
    setnews({})
    getNews('hacker', 'story',news.page + 1)
  }

    return (
    <div className='news_div row'>
      {/* MAP THROUGH EACH NEWSITEM */}
        { news.hits.map(item => {
            return (
                <NewsItem key={item.title} className='col-md-6 col-sm-12' item={item} />
            )
        })}
      <div style={{ marginTop: '5%', display: "flex", justifyContent: 'space-between' }}>
          <button className='btn btn-primary' onClick={prevPage} disabled={news.page === 1} variant="outlined"><i className="fa-solid fa-angles-left"></i> Previous Page</button>

        <button className='btn btn-primary' variant="contained" disabled style={{ fontWeight: '800' }} >{news.page}<span >/{news.nbPages}</span></button>

          <button className='btn btn-primary' onClick={nxtPage} disabled={news.currPage === news.nbPages} variant="outlined">Next Page <i className="fa-solid fa-angles-right"></i></button>
      </div>

    </div>
  )
}

export default NewsHome
