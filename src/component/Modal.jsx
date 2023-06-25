import React, { useState } from "react";
import "../assets/css/modal.css"

const Modal = ({closeModal}) => {
    console.log("hello")
    return(
        <div className={closeModal ? "modal_container" : "modal_display"}>
            <div className="modal_test">
                <p>Employee created</p>
                <div className="close_container">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )

}

export default Modal
