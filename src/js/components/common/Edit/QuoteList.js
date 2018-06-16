import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuoteListItem from './QuoteListItem';
import EditCreator from './EditCreator';
import EditList from './EditList';

import produce from 'immer';

class QuoteList extends Component {

	render() {
		const {
			quotes,
			quoteCreatorValue,
			changeQuote,
			createQuote,
			changeCreatorValue,
		} = this.props;

		const editActive = quotes.some(quote => quote.isEditable);
		const anyActive = quotes.some(quote => quote.isEditable || quote.isDeletable || quote.toolsVisible);

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			changeCreatorValue(newText);
		}

		return (
			<EditList>
				<EditList.ListContainer>

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
				</EditList.ListContainer>

				<EditCreator
					value={quoteCreatorValue}
					onChange={(e) => cleanUpText(e)}
					onClick={() => createQuote(quoteCreatorValue)}
					disabled={anyActive}
				/>
			</EditList>
		);
	}
}

QuoteList.propTypes = {
	quotes: PropTypes.array,
	changeQuote: PropTypes.func,
	createQuote: PropTypes.func,
};

export default QuoteList;