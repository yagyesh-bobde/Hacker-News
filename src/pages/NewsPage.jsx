import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Children from '../components/children/Children';
import Loading from '../components/Loading';
import { NewsContext } from '../context/newsState'

const News = () => {
  const navigate = useNavigate();
  const { newsItem } = useContext(NewsContext)
  const [alert, setalert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setalert(false)
    }, 3000);

  }, [])


  return (

      <div className='news_item_page'>
      { alert && <div class="alert alert-info alert_position " role="alert">
        This section will be updated more to make it more readable{':)'}
      </div>}
        {(Object.keys(newsItem).length === 0) && <Loading />}
        {!(Object.keys(newsItem).length === 0) && <div><header className='text-center'>
        <h4>{newsItem.title}</h4>
      </header>
      <main>
        <div className="d-flex" style={{ justifyContent: 'end'}}>
            <span className='' style={{ fontWeight: '800' }}>~<b>{newsItem.author}</b> </span>

        </div>
        {newsItem.children?.map(item => {
          return (
            <Children key={item} item={item} />
          )
        })}
      </main>
      <footer >
        <button className='btn btn-primary my-2' onClick={ () => navigate('/') }>
          <i className="fa-solid fa-angles-left mx-2"></i>
          <span>Go Back</span>
        </button>
      </footer>
      </div>}
    </div>

  )
}

export default News
