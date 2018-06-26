import React, { Component } from 'react';
import styled from 'styled-components';

import { UserTheme } from './components/UserTheme';
import { Color } from './components/common/Mixins';

import Auth from './components/Auth';
import Home from './components/Home';

const AppContainer = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
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
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.isRunningAuth !== this.state.isRunningAuth && this.state.isRunningAuth) {
			this.scrollToBottom();
		}
	}

	setIsUserActive = () => {
		this.setState({ isUserActive: !this.state.isUserActive })
	}

	setIsRunningAuth = () => {
		this.setState({ isRunningAuth: !this.state.isRunningAuth })
	}

	scrollToBottom = () => {
		console.log("Scrolled to bottom");
		console.log(this.pageEnd);
		// if (!!this.pageEnd) this.pageEnd.scrollIntoView({ behavior: "smooth" });
	}

	render() {
		return (
			<AppContainer>
				<UserTheme
					scrollToBottom={this.scrollToBottom}
					setIsUserActive={this.setIsUserActive}
					setIsRunningAuth={this.setIsRunningAuth}
					isUserActive={this.state.isUserActive}
					isRunningAuth={this.state.isRunningAuth}
				>
					{
						!this.state.isUserActive ? (
							<Auth scrollToBottom={this.scrollToBottom} />
						) : (
								<Home scrollToBottom={this.scrollToBottom} />
							)
					}
				</UserTheme>
				<div style={{ height: "0", width: "100%" }} ref={el => { this.pageEnd = el; }}></div>
			</AppContainer>
		)
	}
}

export default App;