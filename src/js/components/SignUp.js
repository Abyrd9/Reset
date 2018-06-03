import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthInput from './common/AuthInput';
import AuthSocialButtons from './common/AuthSocialButtons';
import AuthToggleLink from './common/AuthToggleLink';
import FooterButton from './common/FooterButton';
import LogoHeader from './common/LogoHeader';

class SignUp extends Component {
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

				{/* logo */}
				<LogoHeader />

				{/* form */}
				<div className="auth__form-container">
					{/* Inputs */}
					<div className="auth__input-container">
						<AuthInput
							icon="name"
							value={this.state.name}
							onChange={(e) => this.setState({name: e.target.value})}
							placeholder="full name"
						/>
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
					<div className="auth__divider">
						<span className="auth__divider__line"></span>
						or
						<span className="auth__divider__line"></span>
					</div>

					{/* Social Buttons */}
					<div className="auth__social-buttons-container">
						<AuthSocialButtons icon="facebook" onClick={() => {return;}} />
						<AuthSocialButtons icon="google" onClick={() => {return;}} />
					</div>
				</div>

				{/* Auth Toggle - Sign In */}
				<AuthToggleLink
					text="Already have an account? "
					linkText="Sign In"
				/>

				{/* Sign Up Button */}
				<FooterButton>
					Sign Up
				</FooterButton>

			</div>
		);
	}
}

export default SignUp;