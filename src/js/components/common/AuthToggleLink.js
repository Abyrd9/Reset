import React from 'react';
import PropTypes from 'prop-types';

const AuthToggleLink = props => {
	return (
		<div className="auth-toggle-link">
			{props.text}
			<a
				href={props.href}
				onClick={props.onClick}
				className="auth-toggle-link__link"
			>
				{props.linkText}
			</a>
		</div>
	);
};

AuthToggleLink.propTypes = {
	text: PropTypes.string,
	linkText: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export default AuthToggleLink;