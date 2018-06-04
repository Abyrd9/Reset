import React from 'react';
import PropTypes from 'prop-types';

const ToolButtons = props => {
	return (
		<div className="tool-buttons">
			<i className="fas fa-trash tool-buttons__icon" onClick={props.deleteClick} ></i>
			<i className="fas fa-edit tool-buttons__icon" onClick={props.editClick} ></i>
		</div>
	);
};

ToolButtons.propTypes = {
	deleteClick: PropTypes.func,
	editClick: PropTypes.func,
};

export default ToolButtons;