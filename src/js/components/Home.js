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
							<ShowQuotes />
							<EditQuotes className={context.page === 'edit' ? 'is-open' : ''} />
						</React.Fragment>
					)
				}
			</UserContext.Consumer>
		);
	}
}

export default Home;