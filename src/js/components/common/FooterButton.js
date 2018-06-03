import React from 'react';
import PropTypes from 'prop-types';

const FooterButton = props => {
	return (
		<button className="footer-button">
			{props.children}
		</button>
	);
};

FooterButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default FooterButton;