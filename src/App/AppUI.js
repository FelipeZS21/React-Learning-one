import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButoon } from '../TodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty'; 
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm'
import { TodosNotFound } from '../TodosNotFound';
import React from 'react';
import { Modal } from '../Modal';

function AppUI(){

    const {
        loading, 
        error, 
        searchedTodos,
        completeTodo, 
        deleteTodo, 
        openModal,
        totalTodos,
    } = React.useContext(TodoContext); 

    return (
        <div className='app-container'>
            <div className='principal-container'>
        
                <TodoCounter/>
                <TodoSearch/>

                <TodoList>
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && totalTodos == 0) && <TodosEmpty/>}
                    {(!loading && searchedTodos.length === 0 && totalTodos >= 1) && <TodosNotFound/>}

                    {searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.text} 
                            Text={todo.text} 
                            Completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
        
                {/* <TodoButoon/> */}

                { openModal && (
                    <Modal>
                        <TodoForm></TodoForm>
                    </Modal>
                )}
            </div>
            <TodoButoon/>
        </div>
        );
}

export { AppUI }