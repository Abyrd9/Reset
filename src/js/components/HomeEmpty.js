import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteBlock from './common/QuoteBlock';
import PillButton from './common/PillButton';

class HomeEmpty extends Component {
	render() {
		return (
			<div className="home-empty">
				
				{/* logo */}
				<div className="home-empty__logo-container">
					<img src={'../../src/assets/img/Logo.png'} alt={"logo image"} className="home-empty__logo-container__logo" />
				</div>

				{/* Quote Block */}
				<QuoteBlock quote="You don’t have any truth statements yet. Click the button below to create one." />

				{/* Add New Quote Button */}
				<PillButton>
					<i className="fas fa-plus-circle"></i>
					Add New
				</PillButton>

			</div>
		);
	}
}

export default HomeEmpty;