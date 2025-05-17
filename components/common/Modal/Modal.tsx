import React, { useState } from "react";
import "./style.scss";
import ButtonClick from "../Button/ButtonClick";

const Modal = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* <button className="open-modal-button" onClick={openModal}>
        Open Inquiry Form
      </button> */}

      <ButtonClick
        buttonName={"Inquire Now"}
        onClickFunction={openModal}
      />

      {isOpen && (
        <div className="modal__overlay" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
