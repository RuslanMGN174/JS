import React, { Component } from 'react';
import { Modal } from './Modal';
import TriggerButton from './Trigger';

export class Container extends Component {
	state = {
		isShown: false
	};

	textInput = React.createRef();

	showModal = () => {
		this.setState({ isShown: true }, () => {
			// this.closeButton.focus();
			this.textInput.focus();

		});
		this.toggleScrollLock();
	};

	// onFocus = () => {
	// 		this.setState({
	// 			focus: true,
	// 		});
	// }

	// focus = () => {
	// 	this.textInput.current.focus();
	// }

	closeModal = () => {
		this.setState({ isShown: false });
		this.TriggerButton.focus();
		this.toggleScrollLock();
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

	toggleScrollLock = () => {
		document.querySelector('html').classList.toggle('scroll-lock');
	};
	render() {
		return (
			<React.Fragment>
				<TriggerButton
					showModal={this.showModal}
					buttonRef={(n) => (this.TriggerButton = n)}
					triggerText={this.props.triggerText}
				/>
				{this.state.isShown ? (
					<Modal
						onSubmit={this.props.onSubmit}
						modalRef={(n) => (this.modal = n)}
						// buttonRef={(n) => (this.closeButton = n)}
						inputFocus={(a) => (this.textInput = a)}
						closeModal={this.closeModal}
						onKeyDown={this.onKeyDown}
						onClickOutside={this.onClickOutside}
						
					/>
				) : null}
			</React.Fragment>
		);
	}
}

export default Container;
