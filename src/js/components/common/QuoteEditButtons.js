import React from 'react';
import PropTypes from 'prop-types';

const QuoteEditButtons = props => {
	return (
		<div className="quote-edit-buttons">
			<button className="quote-edit-buttons__button" onClick={props.cancelClick}>
				<i className="fas fa-times quote-edit-buttons__button-icon"></i>
			</button>
			<button className="quote-edit-buttons__button" onClick={props.approveClick}>
				<i className="fas fa-check quote-edit-buttons__button-icon"></i>
			</button>
		</div>
	);
};

QuoteEditButtons.propTypes = {
	cancelClick: PropTypes.func,
	approveClick: PropTypes.func,
};

export default QuoteEditButtons;