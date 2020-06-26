import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../Form/index.js';
import FocusTrap from 'focus-trap-react';
import "./Modal.css";

export const Modal = ({
  onSubmit,
  inputFocus,
  onClickOutside,
  onKeyDown,
  onCancel
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className="modal">
          <div className="modal-body">
            <Form
              onSubmit={onSubmit}
              inpurFocus={inputFocus}
              onClick={onCancel} />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;