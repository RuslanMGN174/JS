import React, { Component } from "react";
import LaunchButton from "../Button/LaunchButton";
import Modal from "../Modal/index.js";

export class Container extends Component {
  state = {
    isOpen: false
  };

  textInput = React.createRef();

  showModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  render() {
    return (
      <React.Fragment>
        <LaunchButton
          showModal={this.showModal}
          launchButtonText={this.props.launchButtonText}
        />
        {this.state.isOpen ? (
          <Modal
            onSubmit={this.props.onSubmit}
            inputFocus={(a) => (this.textInput = a)}
            onKeyDown={this.onKeyDown}
            onCancel={this.closeModal}
            // onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;