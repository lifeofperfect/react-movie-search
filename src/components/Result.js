import React from 'react'

function Result({result, openPopUp}) {
    return(
        <div className='result'>
            <h3>{result.Title}</h3>
            <img src={result.Poster} onClick={()=>openPopUp(result.imdbID)}/>
            
        </div>
    )
}

export default Result;