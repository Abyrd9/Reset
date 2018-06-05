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
		this.isUserActive = this.isUserActive.bind(this);
		this.isRunningAuth = this.isRunningAuth.bind(this);
	}

	isUserActive = () => {
		this.setState({ isUserActive: !this.state.isUserActive })
	}

	isRunningAuth = () => {
		this.setState({ isRunningAuth: !this.state.isRunningAuth })
	}

	render() {
        return (
            <div className='global-container'>
                <UserTheme
									isUserActive={this.isUserActive}
									isRunningAuth={this.isRunningAuth}
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