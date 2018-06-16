import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuotesNav from './common/Quotes/QuotesNav';
import QuotesBlock from './common/Quotes/QuotesBlock';
import QuotesFooter from './common/Quotes/QuotesFooter';

import { UserContext } from './UserTheme';
import Backdrop from './common/Backdrop';

class ShowQuotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			isMenuOpen: false,
		}
		this.nextQuote = this.nextQuote.bind(this);
	}

	nextQuote = (quotes) => {
		this.setState({ className: '' });
		const newIndex = this.state.index + 1;
		setTimeout(() => {
			if (newIndex >= quotes.length) {
				this.setState({ index: 0 });
			} else {
				this.setState({ index: newIndex })
			}
		}, 1000)
	}

	render() {
		return (
			<Backdrop quotes>
        <UserContext.Consumer>
          {
            context => (
              <React.Fragment>
								<QuotesNav>
									<QuotesNav.Menu 
										isOpen={this.state.isMenuOpen} 
										menuList={[
											{text: 'Sign Out', onClick: () => context.signOut()}
										]}
									/>
									<QuotesNav.Image src="../../../src/assets/img/Logo.png" />
									<QuotesNav.Icon onClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })}/>
								</QuotesNav>


								<QuotesBlock>
									<QuotesBlock.Icon iconClassname="fas fa-quote-left" left />
									<QuotesBlock.Icon iconClassname="fas fa-quote-right" right />
									<QuotesBlock.Text>
										{context.quotes.length > 0 ? context.quotes[this.state.index].value : 'You don’t have any truth statements yet. Click the button below to create one.'}
									</QuotesBlock.Text>
								</QuotesBlock>
								<QuotesBlock.Button
									onClick={() => {
										context.quotes.length > 0 
											? this.nextQuote(context.quotes) 
											: context.changePage('edit')}
									}
								>
									{context.quotes.length > 0
										? 'I Believe this is true' 
										: <React.Fragment><i className="fas fa-plus-circle"></i> Add New Quote</React.Fragment>
									}
								</QuotesBlock.Button>


                {context.quotes.length > 0 && (
									<QuotesFooter>
										<QuotesFooter.Button
											onClick={() => context.changePage('edit')}
										>
											<i className="fas fa-plus-circle"></i>
											Add New
										</QuotesFooter.Button>
									</QuotesFooter>
								)}
							</React.Fragment>
            )
          }
        </UserContext.Consumer>
			</Backdrop>
		);
	}
}

export default ShowQuotes;