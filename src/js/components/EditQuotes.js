import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './common/NavBar';
import QuoteList from './common/QuoteList';

import { UserContext } from './UserTheme';

class EditQuotes extends Component {
	render() {
		return (
			<div className={`edit ${this.props.className}`}>
				<UserContext.Consumer>
					{
						context => (
							<React.Fragment>
								<NavBar
									onClick={() => context.changePage('home')}
								/>
								<QuoteList
									quotes={context.quotes}
									quoteCreatorValue={context.quoteCreatorValue}
									changeQuote={context.changeQuote}
									createQuote={context.createQuote}
									changeCreatorValue={context.changeCreatorValue}
								/>
							</React.Fragment>
					)}
				</UserContext.Consumer>
			</div>
		);
	}
}

export default EditQuotes;