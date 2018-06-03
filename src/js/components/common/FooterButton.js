import React from 'react';
import PropTypes from 'prop-types';

const FooterButton = props => {
	return (
		<button className={props.className}>
			{props.children}
		</button>
	);
};

FooterButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element.isRequired
};

export default FooterButton;