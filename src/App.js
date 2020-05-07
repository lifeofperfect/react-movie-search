import React, {useState} from 'react'
import Search from './components/Search'
import Axios from 'axios'
import Results from './components/Results'
import Popup from './components/Popup'

const App =()=> {

    const [state, setState]= useState({
        s:"",
        results: [],
        selected: {},
    })

    const apikey="your api key"
    const apiurl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}`

    const handleInput=(e)=> {
        let s = e.target.value;

        setState((prevInput)=> {
            return({
                ...prevInput,
                s:s
            })
        })

        
    }

    const handleClick=(e)=> {
        if(e.key==="Enter") {
            let word = state.s;
            Axios(apiurl+ "&s=" +word)
                .then(({data})=> {
                    let results=data.Search
                    console.log(results)
                    setState(prevWord=> {
                        return {
                            ...prevWord,
                            results: results
                        }
                    })
                })
        }

        
    }

    const openPopUp=id=> {
        Axios(apiurl + "&i=" +id)
            .then(({data})=> {
                let result=data;
                console.log(result)

                setState(prevState=> {
                    return {
                        ...prevState,
                        selected:result
                    }
                })
            })
            console.log(id)
    }

    const closePopUp=()=> {
        setState(prevState=> {
            return {
                ...prevState,
                selected: {}
            }
        })
    }

    return(
        <div className='App'>
            <header>
                <h1>Movie Search</h1>
            </header>
            <main>
                <Search handleInput={handleInput} handleClick={handleClick}/>
                <Results results={state.results} openPopUp={openPopUp}/>

                {(typeof state.selected.Title != "undefined")? <Popup selected={state.selected} closePopUp = {closePopUp} />: false}
            </main>
        </div>
    )
}

export default App;