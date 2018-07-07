import styled from 'styled-components';
import { Shadow, Color, Depth, Font } from '../../common/Mixins';
import firebase from '../../../utils/Firebase';
import produce from 'immer';

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: ${props => props.isVisible ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
	padding: 0px 20px;
	background-color: rgba(0,0,0,.5);
	box-sizing: border-box;
	${Depth('top')}
`

const Content = styled.div`
	max-width: 300px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 15px;
	padding-top: 30px;
	background-color: ${Color.White};
	${Shadow(1)}
	${Depth('top')}
`

const IconComponent = props => {
	return (
		<i className={`fas fa-times ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.Black};
	font-size: 24px;
  position: absolute;
  top: 5px;
  left: calc(100% - 25px);
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

const Title = styled.p`
	${Font(700, '14px')}
	color: ${Color.Black};
	text-align: center;
`;

const ErrorText = styled.p`
	${Font(500, '10px')}
	color: ${Color.BlackLight};
	text-align: center;
`;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthInput from './AuthInput';
import AuthButton from './AuthButton';

class AuthPasswordResetModal extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			errorMessage: '',
		}
	}

	passwordReset = (email) => {
		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				this.setState({ errorMessage: "Email has been sent!" });
				console.log("Email Has Been Sent!");
				setTimeout(() => {this.props.closeModal()}, 3000)
			})
			.catch(err => {
				this.setState({ errorMessage: err.message });
				console.log(err)
			})
	}

	closeModal = e => {
		if (e.target.dataset.modal === 'container' || e.target.classList.contains('fa-times')) {
			this.props.closeModal();
		}
	}

	render() {
		return (
			<Background data-modal="container" isVisible={this.props.isVisible} onClick={e => this.closeModal(e)}>
				<Content>
					<Icon data-modal="icon" onClick={e => this.closeModal(e)}/>
					<Title>Please include the correct user email to reset your password.</Title>
					<AuthInput
						type="text"
						icon="email"
						value={this.state.email}
						onChange={e => {
							const value = e.target.value;
							this.setState(
								produce(draft => { draft.email = value })
							)}
						}
						placeholder="Email"
					/>
					<AuthButton
						onClick={() => this.passwordReset(this.state.email)}
					>
						Send Password Reset
					</AuthButton>
					{this.state.errorMessage !== '' && (
						<ErrorText>{this.state.errorMessage}</ErrorText>
					)}
				</Content>
			</Background>
		);
	}
}

AuthPasswordResetModal.propTypes = {
	isVisible: PropTypes.bool,
	closeModal: PropTypes.func,
};

export default AuthPasswordResetModal;