import React, { Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer';
import firebase from '../../utils/Firebase';
import { AuthContainer } from './common/AuthContainer';
import AuthHeader from './common/AuthHeader';
import AuthInput from './common/AuthInput';
import AuthButton from './common/AuthButton';
import AuthPasswordReset from './common/AuthPasswordReset';
import AuthDivider from './common/AuthDivider';
import AuthSocialButton from './common/AuthSocialButtons';
import AuthToggleLink from './common/AuthToggleLink';
import AuthErrorModal from './common/AuthErrorModal';

import Logo from '../../../assets/img/Logo.png';
import AuthPasswordResetModal from './common/AuthPasswordResetModal';
import Form from './common/AuthForm';

class Auth extends Component {
	constructor() {
		super();
		this.state = {
			signIn: {
				email: '',
				password: ''
			},
			signUp: {
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				passwordMatch: false,
			},
			modal: {
				isVisible: false,
				errorMessage: 'There has been an error!',
			},
			emailResetModal: {
				isVisible: false,
			},
			currentPage: 'signUp'
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const passwordDiff = prevState.signUp.password !== this.state.signUp.password;
		const confirmPassDiff = prevState.signUp.confirmPassword !== this.state.signUp.confirmPassword;
		if ( passwordDiff || confirmPassDiff ) {
			if (this.state.signUp.password === this.state.signUp.confirmPassword) {
				this.setState(produce(draft => { draft.signUp.passwordMatch = true }))
			} else {
				this.setState(produce(draft => { draft.signUp.passwordMatch = false }))
			}
		}
	}

	emailAuth = (email, password, name) => {
    if (this.state.currentPage === 'signUp') {
			if (this.state.signUp.passwordMatch) {
				firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
					const userId = response.user.uid;
					firebase.database().ref(`users/${userId}`).update({
						name,
						email
					})
					console.log("Success!", response);
        })
        .catch(error => {
					this.errorModal(error.message);
					console.log(error.code, error.message);
        })
			} else {
				this.errorModal('Please make sure your confirmation password is the same as your password.')
			}
    } else if (this.state.currentPage === 'signIn') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
					console.log("Success!", response);
        })
        .catch(error => {
					this.errorModal(error.message);
        })
    }
	}
	
	googleAuth = () => {
		firebase.auth().signInWithPopup(googleProvider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
			firebase.database().ref(`users/${user.uid}`).update({
				name: user.displayName,
				email: user.email
			}, error => console.log(error))
		}).catch(error => {
			this.errorModal(error.message);
		})
	}

	facebookAuth = () => {
		firebase.auth().signInWithPopup(facebookProvider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
		}).catch(error => {
			this.errorModal(error.message);
		})
	}

	errorModal = (error) => {
		this.setState(produce(draft => {
			draft.modal.errorMessage = error;
			draft.modal.isVisible = true;
		}))
		setTimeout(() => {
			this.setState(produce(draft => {
				draft.modal.isVisible = false;
			}))
		}, 3000)
	}

	render() {
		return (
			<AuthContainer>
				<AuthPasswordResetModal 
					isVisible={this.state.emailResetModal.isVisible}
					closeModal={() => this.setState(
						produce(draft => { draft.emailResetModal.isVisible = false })
					)}
				/>

				<AuthHeader img={Logo} title="Reset" />

				{this.state.currentPage === 'signIn' && (
					<React.Fragment>
						<Form>
							<AuthInput
								type="text"
								icon="email"
								value={this.state.signIn.email}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signIn.email = value })
									)}
								}
								placeholder="Email"
							/>
							<AuthInput
								type="password"
								icon="password"
								value={this.state.signIn.password}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signIn.password = value })
									)}
								}
								placeholder="Password"
							/>
							<AuthErrorModal
								isOpen={this.state.modal.isVisible}
								errorMessage={this.state.modal.errorMessage}
							/>
						</Form>
						<AuthButton
							onClick={() => this.emailAuth(this.state.signIn.email, this.state.signIn.password)}
						>
							Sign In
						</AuthButton>
						<AuthPasswordReset
							onClick={() => this.setState(
								produce(draft => { draft.emailResetModal.isVisible = true })
							)}
						>
							I forgot my password.
						</AuthPasswordReset>
						<AuthDivider>or</AuthDivider>
						<AuthSocialButton
							icon="facebook"
							onClick={() => this.facebookAuth()}
						/>
						<AuthSocialButton
							icon="google"
							onClick={() => this.googleAuth()}
						/>
						<AuthToggleLink
							linkText="Sign Up"
							text="Don't have an account? "
							onClick={() => this.setState(
								produce(draft => { draft.currentPage = 'signUp'})
							)}
						/>
					</React.Fragment>
				)}

				{this.state.currentPage === 'signUp' && (
					<React.Fragment>
						<Form>
							<AuthInput
								type="text"
								icon="name"
								value={this.state.signUp.name}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signUp.name = value })
									)}
								}
								placeholder="Name"
							/>
							<AuthInput
								type="text"
								icon="email"
								value={this.state.signUp.email}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signUp.email = value })
									)}
								}
								placeholder="Email"
							/>
							<AuthInput
								type="password"
								icon="password"
								value={this.state.signUp.password}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signUp.password = value })
									)}
								}
								placeholder="Password"
							/>
							<AuthInput
								type="password"
								icon="confirm"
								value={this.state.signUp.confirmPassword}
								onChange={e => {
									const value = e.target.value;
									this.setState(
										produce(draft => { draft.signUp.confirmPassword = value })
									)}
								}
								placeholder="Confirm Password"
							/>
							<AuthErrorModal
								isOpen={this.state.modal.isVisible}
								errorMessage={this.state.modal.errorMessage}
							/>
						</Form>
						<AuthButton
							onClick={() => this.emailAuth(this.state.signUp.email, this.state.signUp.password, this.state.signUp.name)}
						>
							Sign Up
						</AuthButton>
						<AuthDivider>or</AuthDivider>
						<AuthSocialButton
							icon="facebook"
							onClick={() => this.facebookAuth()}
						/>
						<AuthSocialButton
							icon="google"
							onClick={() => this.googleAuth()}
						/>
						<AuthToggleLink
							linkText="Sign In"
							text="Already have an account? "
							onClick={() => this.setState(
								produce(draft => { draft.currentPage = 'signIn'})
							)}
						/>
					</React.Fragment>
				)}
			</AuthContainer>
		);
	}
}

Auth.propTypes = {

};

export default Auth;