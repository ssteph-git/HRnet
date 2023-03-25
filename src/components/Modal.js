import "./components.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isActiveFalse } from "../lib/redux/mySlice";


function Modal(props) {

  let isModalActive = useSelector((state) => state.isModalActive.isActive); 
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(isActiveFalse());
  };

  let modal;
  if (isModalActive == true) {
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
      {/* <button onClick={openModal}>Ouvrir la modale</button>
      {modal} */}
      {modal}
    </>
  );
}

export default Modal;
