import React from 'react';
import PropTypes from 'prop-types';

const AuthInput = props => {

	let iconClass;
	switch(props.icon) {
		case "name":
			iconClass = "fas fa-user";
			break;
		case "email":
			iconClass = "fas fa-envelope";
			break;
		case "password":
			iconClass = "fas fa-unlock";
			break;
		default:
			iconClass = "";
	}

	return (
		<div className="auth-input">
			<i className={`${iconClass} auth-input__icon`}></i>
			<input
				type="text"
				value={props.value}
				onChange={props.onChange}
				className="auth-input__input"
				placeholder={props.placeholder}
			/>
		</div>
	);
};

AuthInput.propTypes = {
	icon: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

export default AuthInput;