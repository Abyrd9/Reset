import React from 'react';
import PropTypes from 'prop-types';

const QuoteBlock = props => {
	console.log(props)
	return (
		<div className={`quote-block ${props.className}`}>
			<i className="fas fa-quote-left quote-block__icon"></i>
			<p>{props.quote}</p>
			<i className="fas fa-quote-right quote-block__icon"></i>
		</div>
	);
};

QuoteBlock.propTypes = {
	className: PropTypes.string,
	quote: PropTypes.string
};

export default QuoteBlock;