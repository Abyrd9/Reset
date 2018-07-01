import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from './UserTheme';
import Backdrop from './common/Backdrop';
import AuthHeader from './common/Auth/AuthHeader';
import AuthForm from './common/Auth/AuthForm';
import AuthFooter from './common/Auth/AuthFooter';
import AuthModal from './common/Auth/AuthModal';

import Logo from '../../assets/img/Logo.png'


class Auth extends Component {
	constructor(props) {
		super(props);
		this.state ={
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			authModalOpen: false,
		}
	}

	render() {
		return (
			<Backdrop auth>
				<UserContext.Consumer>
					{
						context => (
							<React.Fragment>
								<AuthHeader>
									<AuthHeader.Image src={Logo} />
									<AuthHeader.Title>Reset</AuthHeader.Title>
								</AuthHeader>
								<AuthForm>
									{context.page === "signUp" && (
										<AuthForm.AuthInput
											icon="name"
											value={this.state.name}
											onChange={(e) => this.setState({name: e.target.value})}
											placeholder="Name"
										/>
									)}
									<AuthForm.AuthInput 
										icon="email"
										value={this.state.email}
										onChange={(e) => this.setState({email: e.target.value})}
										placeholder="Email"
									/>
									<AuthForm.AuthInput
										icon="password"
										value={this.state.password}
										onChange={(e) => this.setState({password: e.target.value})}
										placeholder="Password"
									/>
									{context.page === "signUp" && (
										<AuthForm.AuthInput
											icon="confirm"
											value={this.state.confirmPassword}
											onChange={(e) => this.setState({confirmPassword: e.target.value})}
											placeholder="Confirm Password"
										/>
									)}
									<AuthForm.Button
										onClick={() => context.emailAuth(this.state.email, this.state.password, this.state.name)}
									>
										{context.page === "signUp" && 'Sign Up'}
										{context.page === "signIn" && 'Sign In'}
									</AuthForm.Button>

									{context.page === "signIn" && (
										<AuthForm.ForgotPassword
											onClick={() => this.setState({ authModalOpen: !this.state.authModalOpen })}
										>
											I forgot my password.
										</AuthForm.ForgotPassword>
									)}
								</AuthForm>
								<AuthFooter>
									<AuthFooter.Divider>or</AuthFooter.Divider>
									<AuthFooter.SocialButton
										icon="facebook"
										onClick={() => context.facebookAuth()}
									/>
									<AuthFooter.SocialButton
										icon="google"
										onClick={() => context.googleAuth()}
									/>
									{context.page === 'signIn' && (
										<AuthFooter.ToggleLink 
											linkText="Sign Up"
											text="Don't have an account? "
											onClick={() => context.changePage('signUp')}
										/>
									)}
									{context.page === 'signUp' && (
										<AuthFooter.ToggleLink 
											linkText="Sign In"
											text="Already have an account? "
											onClick={() => context.changePage('signIn')}
										/>
									)}
								</AuthFooter>
								<AuthModal isOpen={this.state.authModalOpen} />
							</React.Fragment>
						)
					}
				</UserContext.Consumer>
			</Backdrop>
		);
	}
}

Auth.propTypes = {
	page: PropTypes.string,
};

export default Auth;