import { createContext } from "react";

export const NewsContext = createContext();


const NewsState = (props) => {
    return (
        <NewsContext.Provider value={{ }} >
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState;