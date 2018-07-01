import styled from 'styled-components';
import { Font, Color, Shadow, Animation } from '../../Mixins';
import Modal from '../../Modal';
import firebase from '../../../../utils/Firebase';

const Text = styled.p`
	text-align: center;
	${Font(500, '16px')}
	color: ${Color.BlackLight};
`;

const Button = styled.button`
	width: 100%;
	${Font(400, '14px')}
	color: ${Color.White};
	${Shadow(2)}
	background-color: ${Color.Red};
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 8px 0px;
	margin: 15px 0px;
	transform: scale(1);
	${Animation('all', '.1s', 'ease-in-out', '0s')}
	&:focus, &:active {
		border: none;
		outline: none;
	}
	&:active {
		${Shadow(1)}
		transform: scale(.99);
	}
`

const Input = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	border-bottom: 2px solid ${Color.BlackLight};
	outline: none;
	${Font(400, '14px')}
	padding: 5px;
	color: ${Color.BlackLight};
`

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthModal extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			recoveryMessage: '',
		}
	}

	passwordReset = (email) => {
		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				this.setState({ recoveryMessage: "Email has been sent!" });
				console.log("Email Has Been Sent!");
			})
			.catch(err => {
				this.setState({ recoveryMessage: err.message });
				console.log(err)
			})
	}

	render() {
		return (
			<Modal isOpen={this.props.isOpen}>
				<Text>What Is Your Email?</Text>
				<Input onChange={e => this.setState({email: e.target.value})}/>
				<Button onClick={() => this.passwordReset(this.state.email)}>Send Password Reset Email</Button>
				{this.state.recoveryMessage !== '' && <Text>{this.state.recoveryMessage}</Text>}
			</Modal>
		);
	}
}

AuthModal.propTypes = {
	isOpen: PropTypes.bool,
};

export default AuthModal;