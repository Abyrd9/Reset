import React from 'react';
import PropTypes from 'prop-types';

const QuoteDelete = props => {
	return (
		<div className="quote-delete">
			{props.text}
			<div className="quote-delete__button-container">
				<i
					class="fas fa-check-circle quote-delete__button-container__icon"
					onClick={props.approveClick}
				></i>
				<i
					class="fas fa-times-circle quote-delete__button-container__icon"
					onClick={props.cancelClick}
				></i>
			</div>
		</div>
	);
};

QuoteDelete.propTypes = {
	cancelClick: PropTypes.func,
	approveClick: PropTypes.func,
};

export default QuoteDelete;