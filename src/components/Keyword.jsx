import React from 'react'
import {useParams} from "react-router"

const Keyword = () => {
    const{keyword, textColor} =useParams()


    return (
        <div>
            <h1 style={{color:textColor}}>You search for {keyword}</h1>
        </div>
    )
}

export default Keyword;