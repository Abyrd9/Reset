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
			quotes: {
				buttonDisableDelayTime: 10000,
				buttonDisabled: false,
				quoteTransition: false,
				countDownNumber: 0,
			}
		}
		this.buttonDisableCountdown = this.buttonDisableCountdown.bind(this);
	}

	nextQuote = (quotes) => {
		const newIndex = this.state.index + 1;
		this.setState({ quotes: {...this.state.quotes, quoteTransition: true, buttonDisabled: true }})
		setTimeout(() => {
			if (newIndex >= quotes.length) {
				this.setState({ index: 0 });
			} else {
				this.setState({ index: newIndex })
			}
			this.setState({ quotes: {...this.state.quotes, quoteTransition: false }})
			const countDownNumber = this.state.quotes.buttonDisableDelayTime/1000;
			this.setState({ quotes: {...this.state.quotes, countDownNumber: countDownNumber} })
			this.buttonDisableCountdown();
		}, 1000)
	}

	buttonDisableCountdown = () => {
			const Interval = setInterval(() => {
			const newNumber = this.state.quotes.countDownNumber - 1;
			this.setState({ quotes: {...this.state.quotes, countDownNumber: newNumber }})
			if (newNumber === 0) {
				clearInterval(Interval);
				this.setState({quotes: {...this.state.quotes, buttonDisabled: false}})
			}
		}, 1000)
	}

	render() {
		const buttonText = this.state.quotes.buttonDisabled ? 'Reflect on the above truth.' : 'I Believe this is true';
		return (
			<Backdrop quotes>
        <UserContext.Consumer>
          {
            context => (
              <React.Fragment>
								<QuotesNav>
									<QuotesNav.Menu 
										isOpen={this.state.isMenuOpen}
										onClose={() => this.setState({ isMenuOpen: false })}
										menuList={[{text: 'Sign Out', onClick: () => context.signOut()}]}
									/>
									<QuotesNav.Image src="../../../src/assets/img/Logo.png" />
									<QuotesNav.Icon
										iconClassname={this.state.isMenuOpen ? 'fa fa-times' : 'fas fa-bars'}
										onClick={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })}
									/>
								</QuotesNav>


								<QuotesBlock>
									<QuotesBlock.QuoteContainer isTransition={this.state.quotes.quoteTransition} >
										<QuotesBlock.Icon iconClassname="fas fa-quote-left" left />
										<QuotesBlock.Icon iconClassname="fas fa-quote-right" right />
										<QuotesBlock.Text isTransition={this.state.quotes.quoteTransition} >
											{context.quotes.length > 0 ? context.quotes[this.state.index].value : 'You don’t have any truth statements yet. Click the button below to create one.'}
										</QuotesBlock.Text>
									</QuotesBlock.QuoteContainer>
								</QuotesBlock>

								<QuotesBlock.Button
									onClick={() => {
										context.quotes.length > 0 
											? this.nextQuote(context.quotes) 
											: context.changePage('edit')}
									}
									disabled={this.state.quotes.buttonDisabled}
									hasQuote={context.quotes.length > 0}
								>
									{context.quotes.length > 0
										? buttonText
										: <React.Fragment><i className="fas fa-plus-circle"></i> Add New Quote</React.Fragment>
									}
									{this.state.quotes.buttonDisabled && this.state.quotes.countDownNumber > 0 && (
										<QuotesBlock.ButtonCountdown>This button will enabled in {this.state.quotes.countDownNumber}s.</QuotesBlock.ButtonCountdown>
									)}
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