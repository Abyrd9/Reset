import React, {Component} from 'react';
import styled from 'styled-components';

import { UserTheme } from './components/UserTheme';
import { Color } from './components/common/Mixins';

import Auth from './components/Auth';
import Home from './components/Home';

const AppContainer = styled.div`
	height: 100vh;
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
        return (
            <AppContainer>
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
            </AppContainer>
        )
    }
}

export default App;