import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteBlock from './common/QuoteBlock';
import PillButton from './common/PillButton';
import FooterButton from './common/FooterButton';
import LogoHeader from './common/LogoHeader';

import { UserContext } from './UserTheme';

class ShowQuotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			className: 'visible',
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
			this.setState({ className: 'visible' })
		}, 1000)
	}

	render() {
		return (
			<div className="base">
        <UserContext.Consumer>
          {
            context => (
              <React.Fragment>

                {/* logo */}
                <LogoHeader />

                {/* Quote Block */}
                {context.quotes.length > 0 ? (
                  <React.Fragment>

                    {/* Quote Block */}
                    <QuoteBlock quote={context.quotes[this.state.index].value} className={this.state.className} />
                    
                    {/* Continue to Next Quote Button */}
                    <PillButton onClick={() => this.nextQuote(context.quotes)}>
                      I Believe this is true.
                    </PillButton>

                  </React.Fragment>
                ) : (
                  <React.Fragment>

                    {/* No Quotes Quote Block */}
                    <QuoteBlock
											quote="You don’t have any truth statements yet. Click the button below to create one."
											className="visible"
										/>
                    
                    {/* Add New Quote Button */}
                    <PillButton onClick={() => context.changePage('edit')}>
                      <i className="fas fa-plus-circle"></i>
                      Add New
                    </PillButton>

                  </React.Fragment>
                )}

                {/* Sign In Button */}
                {context.quotes.length > 0 && (
                  <FooterButton onClick={() => context.changePage('edit')}>
                    <i className="fas fa-plus-circle"></i>
                    Add New
                  </FooterButton>
                )}
              </React.Fragment>
            )
          }
        </UserContext.Consumer>
			</div>
		);
	}
}

export default ShowQuotes;