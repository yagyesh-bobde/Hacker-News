import { createContext, useState } from "react";

export const NewsContext = createContext();


const NewsState = (props) => {

    const [news, setnews] = useState({})
    const [newsItem , setnewsItem ] = useState({})
    // TODO: GET NEWS 
    const getNews = async ( query='hacker' , tag='story', page=1) => {
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${tag}&page=${page}`)
        const json = await response.json()
        console.log(json)
        setnews(json)
    }

    // FETCH A NEWS ITEM : GET NEWS ITEM API CALL
    const getNewsItem = async ( id ) => {
        const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`)
        const json = await response.json()
        console.log(json)
        setnewsItem(json)
    }


    return (
        <NewsContext.Provider value={{ news, getNews, setnews, getNewsItem, newsItem, setnewsItem }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;