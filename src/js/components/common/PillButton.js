import React from 'react';
import PropTypes from 'prop-types';

const PillButton = props => {
	return (
		<button className="pill-button" onClick={props.onClick} >
			{props.children}
		</button>
	);
};

PillButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
};

export default PillButton;