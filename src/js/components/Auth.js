import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthInput from './common/AuthInput';
import AuthSocialButtons from './common/AuthSocialButtons';
import AuthToggleLink from './common/AuthToggleLink';
import FooterButton from './common/FooterButton';
import LogoHeader from './common/LogoHeader';

import { UserContext } from './UserTheme';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state ={
			name: "",
			email: "",
			password: "",
		}
	}

	render() {

		return (
			<div className="base auth">
				<UserContext.Consumer>
					{
						context => (
							<React.Fragment>

								{/* logo */}
								<LogoHeader />

								{/* form */}
								<div className="auth__form-container">

									{/* Inputs */}
									<div className="auth__input-container">
										<div className={`${context.page === 'signUp' ? 'name-input-container visible' : 'name-input-container'}`}>
											<AuthInput
												icon="name"
												value={this.state.name}
												onChange={(e) => this.setState({name: e.target.value})}
												placeholder="full name"
											/>
										</div>
										<AuthInput 
											icon="email"
											value={this.state.email}
											onChange={(e) => this.setState({email: e.target.value})}
											placeholder="email@example.com"
										/>
										<AuthInput
											icon="password"
											value={this.state.password}
											onChange={(e) => this.setState({password: e.target.value})}
											placeholder="password"
										/>
									</div>

									{/* Divider */}
									<div className="auth__divider">
										<span className="auth__divider__line"></span>
										or
										<span className="auth__divider__line"></span>
									</div>

									{/* Social Buttons */}
									<div className="auth__social-buttons-container">
										<AuthSocialButtons icon="facebook" onClick={() => context.facebookAuth()} />
										<AuthSocialButtons icon="google" onClick={() => context.googleAuth()} />
									</div>

								</div>

								{/* Auth Toggle - Sign In */}
								{context.page === "signIn" && (
									<AuthToggleLink
										text="Don't have an account? "
										linkText="Sign Up"
										onClick={() => context.changePage('signUp')}
									/>
								)}
								{context.page === "signUp" && (
									<AuthToggleLink
										text="Already have an account? "
										linkText="Sign In"
										onClick={() => context.changePage('signIn')}
									/>
								)}

								{/* Sign Up Button */}
								<FooterButton onClick={
									() => context.emailAuth(this.state.email, this.state.password, this.state.name)
								}>
									{context.page === "signUp" && 'Sign Up'}
									{context.page === "signIn" && 'Sign In'}
								</FooterButton>

							</React.Fragment>
						)
					}
				</UserContext.Consumer>
			</div>
		);
	}
}

Auth.propTypes = {
	page: PropTypes.string,
};

export default Auth;