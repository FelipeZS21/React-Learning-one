import './TodoSearch.css'
import React from 'react'
import { TodoContext } from '../TodoContext'; 

function TodoSearch(){

    const {
        searchValue, 
        setSearchValue, 
    } = React.useContext(TodoContext); 

    const listener = (event) =>{
        setSearchValue(event.target.value)
    }

    return(
        <div className='input-container'>
            <form className='input-form-container'>
                <input 
                    value={searchValue}
                    type='text' 
                    required
                    onChange={listener}
                />
                <label className='lbl-search'>
                    <span className='text-search'>Search</span>
                </label>
            </form>
        </div>
    )
}

export { TodoSearch }