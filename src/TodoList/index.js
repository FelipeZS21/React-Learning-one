import './TodoList.css'

function TodoList( props ){
    return(
        <div className='list-TODOS-container'>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export { TodoList }