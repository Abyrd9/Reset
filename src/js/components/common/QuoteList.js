import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteListItem from './QuoteListItem';
import QuoteCreator from './QuoteCreator';

import produce from 'immer';

import { KeyGen } from '../../utils/KeyGen';

class QuoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			creatorValue: ''
		}
		this.quoteChange = this.quoteChange.bind(this);
		this.createQuote = this.createQuote.bind(this);
	}

	createQuote = () => {
		const isActive = this.state.quotes.some(quote => 
			quote.toolsVisible || quote.isDeletable || quote.isEditable
		);
		console.log(isActive);
		const quoteKey = KeyGen(this.state.quotes);
		const value = this.state.creatorValue;
		const quote = {
			quoteKey,
			value,
			toolsVisible: false,
			isDeletable: false,
			isEditable: false,
		}
		if (value !== '' && !isActive) {
			this.setState(
				produce(draft => {
					draft.creatorValue = '';
					draft.quotes.push(quote)
				})
			)
		}
	}

	quoteChange = (keyToChange, value, key) => {
		this.setState(
			produce(draft => {

				// Make sure clicking a non-active quote doesn't trigger anything
				const filteredQuotes = draft.quotes.filter(quote => quote.quoteKey !== key);
				const notActive = filteredQuotes.every(quote => {
					if (!quote.isDeletable && !quote.isEditable && !quote.toolsVisible) {
						return true;
					} else {
						return false;
					}
				})

				draft.quotes.forEach((quote, index) => {
					if (quote.quoteKey === key && notActive) {
						switch(keyToChange) {
							case 'value':
								quote.value = value;
								quote.toolsVisible = false;
								quote.isDeletable = false;
								quote.isEditable = false;
								break;
							case 'toolsVisible':
								if (!quote.isEditable) {
									quote.toolsVisible = value;
								}
								break;
							case 'isDeletable':
								quote.isDeletable = value;
								quote.toolsVisible = false;
								quote.isEditable = false;
								break;
							case 'isEditable':
								quote.isEditable = value;
								quote.toolsVisible = false;
								quote.isDeletable = false;
								break;
							case 'deleteQuote':
								draft.quotes.splice(index, 1);
							default:
								quote[keyToChange] = value;
						}
					}
				})
			})
		)
	}

	render() {
		const { quotes } = this.state;

		const editActive = quotes.some(quote => quote.isEditable);

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ creatorValue: newText })
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
								quoteChange={this.quoteChange}
								editActive={editActive}
							/>
					))}
				</div>

				<QuoteCreator
					value={this.state.creatorValue}
					onChange={(e) => cleanUpText(e)}
					onClick={() => this.createQuote()}
				/>
			</div>
		);
	}
}

export default QuoteList;