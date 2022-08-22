import React, { useContext } from 'react'
import './NewsItem.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { NewsContext } from '../../context/newsState'


const NewsItem = ( { item}) => {
  const { getNewsItem, setnewsItem } = useContext(NewsContext)
  const navigate = useNavigate();

  const onClick = (e) => {
    setnewsItem({})
    getNewsItem(item.objectID)
    navigate(`/news/${item.objectID}`)
  }
  return (
    <div className='btn'>
     <div className='newsItem' onClick={(e) => onClick(e)} >
        <header>
          <b>{item?.title}</b><br/>
          <i><u>Direct URL : </u><a target='_blank' href={`${item.url}`}>{item.url}</a></i>
        </header>
        <section >
          <span>{item.points} points |</span>
          <span>By {item.author} |</span>
          <span>updated {moment(item.created_at).startOf('ss').fromNow()} |</span> 
          <span>{item.num_comments} comments</span>
        </section>
      </div>
    </div>
  )
}

export default NewsItem
