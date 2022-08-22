import React, { useContext, useState } from 'react'
import { NewsContext } from '../../context/newsState'
import './Filter.css'

const Filter = () => {
    const { getNews, setnews } = useContext(NewsContext);
    const [formData, setformData] = useState({
        query: '',
        tag:''
    })
    const onChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const onClick = (e) => {
        e.preventDefault()
        setnews({})
        getNews(formData.query , formData.tag)
    }
  return (

      <form className="d-flex filter_form" onSubmit={(e) => onClick(e)}>
            {/* FILTER OPTIONS */}
            <div className='filter_item d-flex'>
                <label className='mx-1' htmlFor='seach'>Search
                  <select onChange={(e) => onChange(e)} name='tag' defaultValue={'story'}>
                      <option value="" >All</option>
                      <option value="story" >Stories</option>
                      <option value="comment">Comments</option>
                  </select></label>
                <label  className='mx-1'htmlFor='by'>by
                  <select name='by' defaultValue={'Popularity'}>
                      <option value="Popularity" >Popularity</option>
                      <option value="Date">Date</option>
                  </select></label>
              
            </div>

            {/* SEARCH BUTTON */}
            <div className="search-box d-flex h-50">
              <input name='query' onChange={(e) => onChange(e)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" required />
              <button className="btn btn-outline-success" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
  )
}

export default Filter
