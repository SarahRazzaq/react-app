import React from 'react';
import style from "../components/Modal.css";

function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='close-btn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
               <h1>You want to book a call?</h1>
            </div>
            <div className='modal-body'>
                <h3> Call me at 0708-88 99 00</h3>
            </div>
            <div className='modal-footer'>
                <button 
                className='footer-btn'
                onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
            </div>
        </div>
    </div>
  ); 
}

export default Modal;