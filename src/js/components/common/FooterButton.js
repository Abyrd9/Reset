import React from 'react';
import PropTypes from 'prop-types';

const FooterButton = props => {
	return (
		<button className="footer-button" onClick={props.onClick}>
			{props.children}
		</button>
	);
};

FooterButton.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default FooterButton;