import { TodoContext } from '../TodoContext'
import './TodoCounter.css'
import React from 'react'

function TodoCounter( props ){

    const {
        completedTodos, 
        totalTodos,
    } = React.useContext(TodoContext)

    const ShowMessage = () =>{
        if((completedTodos !== totalTodos) || (totalTodos === 0)){
            return(<h4>Has completado {completedTodos} de {totalTodos} TODOS</h4>)
        }else{
            return(<h4> Muy bien! Completaste todos tus TODOS!😄👌🥳</h4>)
        }
    }
    return(
        <div className='title-container'>
            <h1>
                TODOS TASKS
            </h1>
            <ShowMessage/>
        </div>
    ); 
}

export { TodoCounter }