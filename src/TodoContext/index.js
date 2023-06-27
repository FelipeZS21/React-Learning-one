import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext(); 

function TodoProvider({ children }){

    const [openModal, setOpenModal] = React.useState(false); 

    const [searchValue, setSearchValue] = React.useState(''); 
        const {
        item: todos, 
        saveItem: saveTodos,
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []); 

    const completeTodo = (text) =>{
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        ); 
        newTodos[todoIndex].completed = true; 
        saveTodos(newTodos);
    }

    const deleteTodo = (text) =>{
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        ); 
        newTodos.splice(todoIndex, 1); 
        saveTodos(newTodos);
    }

    const addTodo = (text) =>{
        const newTodos = [...todos]; 
        newTodos.push({
            text, completed: false, 
        }); 
        saveTodos(newTodos); 
    }

    const repeatTodo = (text) =>{
        const newTodos = [...todos]; 
        const todoFind = newTodos.find(
            (todo) => todo.text.toLowerCase() === text.toLowerCase()
        )
        if(todoFind === undefined){return false}else{return true}
    }

    const completedTodos = todos.filter(todos => !!todos.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText)
        }
    );

    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading, 
            error, 
            openModal,
            setOpenModal, 
            addTodo,
            repeatTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }