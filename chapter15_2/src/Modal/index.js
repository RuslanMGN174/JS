import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../Form/index.js';
import FocusTrap from 'focus-trap-react';
import "./Modal.css";

const styles = {
  button: {
    width: "400px",
  }

}

export const Modal = ({
  onSubmit,
  inputFocus,
  onClickOutside,
  onKeyDown,
  closeModal,
  modalRef

}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal" ref={modalRef}>
          <div className="modal-body">
            <Form
              onSubmit={onSubmit}
              inputFocus={inputFocus}
            />
            <button style={styles.button} onClick={closeModal}>Cancel</button>

          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;