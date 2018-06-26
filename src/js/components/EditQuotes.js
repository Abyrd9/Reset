import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteList from './common/Edit/QuoteList';

import { UserContext } from './UserTheme';
import EditNav from './common/Edit/EditNav';
import EditBackdrop from './common/Edit/EditBackdrop';

import LogoWhite from '../../assets/img/LogoWhite.png';

class EditQuotes extends Component {
	render() {
		return (
			<EditBackdrop isOpen={this.props.isOpen}>
				<UserContext.Consumer>
					{
						context => (
							<React.Fragment>
								<EditNav>
									<EditNav.Icon onClick={() => {context.changePage('home'); context.changeQuote('reset');}} />
									<EditNav.Image src={LogoWhite} />
								</EditNav>
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
			</EditBackdrop>
		);
	}
}

export default EditQuotes;