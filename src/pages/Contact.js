import { useState } from "react";
import React from "react";
import Form from "../components/Form";
import Modal from "../components/Modal";

const Contact = () => {
const [openModal, setOpenModal] = useState (false);

  return ( 
        <div className="contact-container">
          <Form/>
          <button 
            className="openModalBtn" 
            onClick={() => {
              setOpenModal(true);
            }}
            >
              Book a call
          </button>
          {openModal &&  <Modal closeModal={setOpenModal} />}
      </div>

  );
};

export default Contact;