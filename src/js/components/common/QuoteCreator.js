import React from 'react';
import PropTypes from 'prop-types';
import AutoSizeInput from '../../utils/AutoSizeInput';

const QuoteCreator = props => {
	return (
		<div className="quote-creator">
			<AutoSizeInput
				defaultHeight={52}
				className="quote-creator__input"
				value={props.value}
				placeholder="Add New Truth..."
				onChange={props.onChange}
			/>
			<button className="quote-creator__button" onClick={props.onClick}>
				<i className="fas fa-plus-circle"></i>
			</button>
		</div>
	);
};

QuoteCreator.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
};

export default QuoteCreator;