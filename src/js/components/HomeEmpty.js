import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuoteBlock from './common/QuoteBlock';
import PillButton from './common/PillButton';
import LogoHeader from './common/LogoHeader';

class HomeEmpty extends Component {
	render() {
		return (
			<div className="base">
				
				{/* logo */}
				<LogoHeader />

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