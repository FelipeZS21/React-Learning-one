import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm(){

    const {
        addTodo,
        setOpenModal,
        repeatTodo,
    } = React.useContext(TodoContext); 

    const [newTodoValue, setNewTodoValue] = React.useState(''); 

    const onSubmit = (event) => {
        event.preventDefault();
        const repeatTodoValue = repeatTodo(newTodoValue); 
        if(!repeatTodoValue){
            addTodo(newTodoValue);
            setOpenModal(false); 
        }else{
            setOpenModal(false); 
        }
    }; 

    const onCancel = (event) => {
        setOpenModal(false)
    }; 

    const onChange = (event) =>{
        setNewTodoValue(event.target.value); 
    };

    return(
        <form onSubmit={onSubmit} className="TodoForm">
            <label><b>Escribe tu nuevo TODO</b></label>
            <textarea 
                placeholder="cortar cebolla"
                value={newTodoValue}    
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    onClick={onCancel}
                    className="TodoForm-button--cancel">
                Cancelar</button>
                <button 
                    className="TodoForm-button--add">
                Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }