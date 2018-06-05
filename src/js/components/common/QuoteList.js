import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuoteListItem from './QuoteListItem';
import QuoteCreator from './QuoteCreator';

import produce from 'immer';

class QuoteList extends Component {

	render() {
		const {
			quotes,
			changeQuote,
			createQuote,
			changeCreatorValue,
		} = this.props;

		const editActive = quotes.some(quote => quote.isEditable);

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			changeCreatorValue(newText);
		}

		return (
			<div className="quote-list">
				<div className="quote-list__quotes">

					{quotes.length > 0 && quotes.map(quote => (
							<QuoteListItem
								key={quote.quoteKey}
								quoteKey={quote.quoteKey}
								value={quote.value}
								toolsVisible={quote.toolsVisible}
								isDeletable={quote.isDeletable}
								isEditable={quote.isEditable}
								changeQuote={changeQuote}
								editActive={editActive}
							/>
					))}
				</div>

				<QuoteCreator
					value={this.state.quoteCreatorValue}
					onChange={(e) => cleanUpText(e)}
					onClick={() => createQuote(this.state.quoteCreatorValue)}
				/>
			</div>
		);
	}
}

QuoteList.propTypes = {
	quotes: PropTypes.array,
	changeQuote: PropTypes.func,
	createQuote: PropTypes.func,
};

export default QuoteList;