import React, {Component} from 'react';
import styled from 'styled-components';

import { UserTheme } from './components/UserTheme';
import { Color } from './components/common/Mixins';

import Auth from './components/Auth';
import Home from './components/Home';

const AppContainer = styled.div`
	height: calc(100vh - 80px);
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: space-between;
	background-color: ${Color.White};
	position: relative;
	overflow: hidden;
	* {
		box-sizing: border-box;
	}
`

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
		console.log(this.state.isUserActive, this.state.isRunningAuth, 'App')
        return (
            <AppContainer>
                <UserTheme
									setIsUserActive={this.setIsUserActive}
									setIsRunningAuth={this.setIsRunningAuth}
									isUserActive={this.state.isUserActive}
									isRunningAuth={this.state.isRunningAuth}
								>
									{
										!this.state.isUserActive ? (
											<Auth />
										) : (
											<Home />
										)
									}
                </UserTheme>
            </AppContainer>
        )
    }
}

export default App;