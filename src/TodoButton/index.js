import './TodoButton.css'
import React from 'react'
import { TodoContext } from '../TodoContext'

function TodoButoon(){

    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext)

    const listener = () =>{
        setOpenModal(!openModal)
    }

    return(
        <div className='add-TODO-container'>
            <button
                onClick={listener}
            >+</button>
        </div>
    )
}

export { TodoButoon }