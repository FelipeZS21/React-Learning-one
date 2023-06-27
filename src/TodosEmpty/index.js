import React from "react";
import './TodosEmpty.css'

function TodosEmpty(){
    return(
        <div className="TodoEmpty-container">
            <h4 className="border">¡Crea tu primer Todo!</h4>
            <h4 className="wave">¡Crea tu primer Todo!</h4>
            <h4 className="ubication">
                Puedes hacerlo con el boton azul en la parte inferior
                de tu pantalla!.
            </h4>
        </div>
    )
}

export { TodosEmpty }