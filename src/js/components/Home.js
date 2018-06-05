import React, { Component } from 'react';

import EditQuotes from './EditQuotes';
import ShowQuotes from './ShowQuotes';

import { UserContext } from './UserTheme';

class Home extends Component {
	render() {
		return (
			<UserContext.Consumer>
				{
					context => (
						<React.Fragment>
							{context.page === 'home' && ( <ShowQuotes /> )}
							{context.page === 'edit' && ( <EditQuotes /> )}
						</React.Fragment>
					)
				}
			</UserContext.Consumer>
		);
	}
}

export default Home;