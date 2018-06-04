import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './common/NavBar';
import QuoteList from './common/QuoteList';

class Edit extends Component {
	render() {
		return (
			<div className="edit">
				<NavBar />
				<QuoteList />
			</div>
		);
	}
}

export default Edit;