import React from 'react';
import PropTypes from 'prop-types';

const AuthSocialButtons = props => {

	let iconClass;
	switch(props.icon) {
		case "facebook":
			iconClass = "fab fa-facebook-square";
			break;
		case "google":
			iconClass = "fab fa-google-plus-square";
			break;
		default:
			iconClass = "";
	}

	return (
		<button className="auth-social-button" onClick={props.onClick}>
			<i className={`${iconClass} auth-social-button__icon`}></i>
		</button>
	);
};

AuthSocialButtons.propTypes = {
	icon: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default AuthSocialButtons;