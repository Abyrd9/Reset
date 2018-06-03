import React from 'react';
import PropTypes from 'prop-types';

const AuthButton = props => {
	return (
		<button className="auth-button">
			{props.children}
		</button>
	);
};

AuthButton.propTypes = {
	children: PropTypes.string.isRequired
};

export default AuthButton;