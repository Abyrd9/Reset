import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthInput from './common/AuthInput';
import AuthSocialButtons from './common/AuthSocialButtons';
import AuthToggleLink from './common/AuthToggleLink';
import FooterButton from './common/FooterButton';

class SignIn extends Component {
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
			<div className="sign-up">

				{/* logo */}
				<div className="sign-up__logo-container">
					<img src={'../../src/assets/img/Logo.png'} alt={"logo image"} className="sign-up__logo-container__logo" />
				</div>

				{/* form */}
				<div className="sign-up__form-container">
					{/* Inputs */}
					<div className="sign-up__input-container">
						<AuthInput 
							icon="email"
							value={this.state.email}
							onChange={(e) => this.setState({name: e.target.value})}
							placeholder="email@example.com"
						/>
						<AuthInput
							icon="password"
							value={this.state.password}
							onChange={(e) => this.setState({name: e.target.value})}
							placeholder="password"
						/>
					</div>

					{/* Divider */}
					<div className="sign-up__divider">
						<span className="sign-up__divider__line"></span>
						or
						<span className="sign-up__divider__line"></span>
					</div>

					{/* Social Buttons */}
					<div className="sign-up__social-buttons-container">
						<AuthSocialButtons icon="facebook" onClick={() => {return;}} />
						<AuthSocialButtons icon="google" onClick={() => {return;}} />
					</div>
				</div>

				{/* Auth Toggle - Sign Up */}
				<AuthToggleLink
					text="Don't have an account? "
					linkText="Sign In"
				/>

				{/* Sign In Button */}
				<FooterButton className="auth-button">
					Sign In
				</FooterButton>

			</div>
		);
	}
}

export default SignIn;