import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthInput_Styled from './AuthInputStyles';

class AuthInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		}
	}
	render() {
		let iconClass;
		switch(this.props.icon) {
			case "name":
				iconClass = "fas fa-user";
				break;
			case "email":
				iconClass = "fas fa-envelope";
				break;
			case "password":
				iconClass = "fas fa-unlock";
				break;
			case "confirm":
				iconClass = "fas fa-lock";
				break;
			default:
				iconClass = "";
		}
	
		return (
			<AuthInput_Styled>
				<AuthInput_Styled.Icon iconClassname={iconClass} />
				<AuthInput_Styled.Label>
					<AuthInput_Styled.Input
						onFocus={() => this.setState({ isActive: true })}
						onBlur={() => this.setState({ isActive: false })}
						type="text"
						value={this.props.value}
						onChange={this.props.onChange}
						disabled={this.props.disabled}
					/>
					<AuthInput_Styled.Placeholder
						isActive={this.state.isActive}
						hasText={this.props.value.length > 0}
						onChange={this.props.onChange}
					>
						{this.props.placeholder}
					</AuthInput_Styled.Placeholder>
				</AuthInput_Styled.Label>
			</AuthInput_Styled>
		);
	}
};

AuthInput.propTypes = {
	icon: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

export default AuthInput;

		{/* <div className="auth-input">
			<i className={`${iconClass} auth-input__icon`}></i>
			<label className="auth-input__label" >
				<input
					type="text"
					value={props.value}
					onChange={props.onChange}
					className="auth-input__input"
					disabled={props.disabled}
				/>
				<p
					className={`auth-input__placeholder ${props.value.length > 0 ? 'hidden' : ''}`}
				>
					{props.placeholder}
				</p>
			</label>

		</div> */}