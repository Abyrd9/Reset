import React from 'react';
import PropTypes from 'prop-types';

const QuoteDelete = props => {
	return (
		<div className={`quote-delete ${props.className}`}>
			{props.text}
			<div className="quote-delete__button-container">
				<i
					className="fas fa-check-circle quote-delete__button-container__icon"
					onClick={props.approveClick}
				></i>
				<i
					className="fas fa-times-circle quote-delete__button-container__icon"
					onClick={props.cancelClick}
				></i>
			</div>
		</div>
	);
};

QuoteDelete.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	cancelClick: PropTypes.func,
	approveClick: PropTypes.func,
};

export default QuoteDelete;