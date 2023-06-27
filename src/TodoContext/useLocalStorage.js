import React from "react";

// const defaultTodos = [
//   {text: 'Cortar madera', completed: true}, 
//   {text: 'Tomar el curso a React.js', completed: false}, 
//   {text: 'Llorar en la lloreria', completed: true}, 
//   {text: 'Xd', completed: false}, 
//   {text: 'cruzar la calle', completed: true}
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); 
// localStorage.removeItem('TODOS_V1'); 

function useLocalStorage(itemName, initialValue) {  
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false); 

    React.useEffect(() =>{
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem; 
    
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = []; 
                }else{
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
    
                setLoading(false)
            }catch(error){
                setLoading(false);
                setError(true); 
            }
        }, 2000); 
    },[]); 

    const saveItem = (newItem) =>{
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return{
        item,
        saveItem,
        loading, 
        error
    };
}

export { useLocalStorage }