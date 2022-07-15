import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Open Modal
      </button>
      
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                reiciendis ipsa praesentium culpa voluptatem magnam. Sint eos
                ipsam nostrum eligendi voluptatum ullam itaque placeat quia,
                porro earum repudiandae illum natus?
              </p>
              <button onClick={toggleModal} className="close-modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
