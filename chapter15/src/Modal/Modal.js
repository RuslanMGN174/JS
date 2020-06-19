import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <a href="#about" onClick={() => this.setState({ isOpen: true })}>New comment</a>
        {this.state.isOpen && (<div className="modal">
          <div className="modal-body">
            <input placeholder="Your Name" />
            <button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
          </div>
        </div>
        )}
      </React.Fragment>
    );
  }
}
