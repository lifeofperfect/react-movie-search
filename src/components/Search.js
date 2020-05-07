import React from 'react'

const Search =({handleInput, handleClick})=> {
    return (
        <section>
            <input placeholder="Enter your movie Search here..." type='text' className='searchBox'
            onChange={handleInput}
            onKeyPress = {handleClick}
            /> 
        </section>
    )
}

export default Search;