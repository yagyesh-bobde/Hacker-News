import { createContext, useState } from "react";

export const NewsContext = createContext();


const NewsState = (props) => {

    const [news, setnews] = useState({})

    // TODO: GET NEWS 
    const getNews = async ( query='hacker' , page=1) => {
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
        const json = await response.json()
        console.log(json)
        setnews(json)
    }

    return (
        <NewsContext.Provider value={{ news, getNews }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;