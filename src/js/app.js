import React, {Component} from 'react';

import { UserTheme } from './components/UserTheme';

import Auth from './components/Auth';
import Home from './components/Home';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isUserActive: false,
			isRunningAuth: false,
		}
		this.setIsUserActive = this.setIsUserActive.bind(this);
		this.setIsRunningAuth = this.setIsRunningAuth.bind(this);
	}

	setIsUserActive = () => {
		this.setState({ isUserActive: !this.state.isUserActive })
	}

	setIsRunningAuth = () => {
		this.setState({ isRunningAuth: !this.state.isRunningAuth })
	}

	render() {
        return (
            <div className='global-container'>
                <UserTheme
									setIsUserActive={this.setIsUserActive}
									setIsRunningAuth={this.setIsRunningAuth}
									isUserActive={this.state.isUserActive}
								>
									{
										!this.state.isUserActive ? (
											<Auth />
										) : (
											<Home />
										)
									}
                </UserTheme>
            </div>
        )
    }
}

export default App;