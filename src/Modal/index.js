import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className='modal-container'>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
        );
}

export { Modal };