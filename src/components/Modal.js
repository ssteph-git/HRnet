import "./components.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Modal(props) {
  let [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  let Employees = useSelector((state) => state.addEmployee); //token unique de l'utilisateur
  console.log("mes employées", Employees);

  let modal;
  if (modalOpen == true) {
    modal = (
      <div className="background-modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <p>Employee Created!</p>
        </div>
      </div>
    );
  } else {
    modal = null;
  }

  return (
    <>
      <button onClick={openModal}>Ouvrir la modale</button>
      {modal}
    </>
  );
}

export default Modal;
