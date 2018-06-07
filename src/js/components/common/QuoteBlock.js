import React from 'react';
import PropTypes from 'prop-types';

const QuoteBlock = props => {
	console.log(props)
	return (
		<div className="quote-block">
			<i className="fas fa-quote-left quote-block__icon"></i>
			{props.quote}
			<i className="fas fa-quote-right quote-block__icon"></i>
		</div>
	);
};

QuoteBlock.propTypes = {
	quote: PropTypes.string
};

export default QuoteBlock;