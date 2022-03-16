import React from 'react'
import {useParams} from "react-router"

const Keyword = () => {
    const{keyword} =useParams()


    return (
        <fieldset>
            <h1>You search for {keyword}</h1>
        </fieldset>
    )
}

export default Keyword;