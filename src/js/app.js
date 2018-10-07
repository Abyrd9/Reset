import React, { Component } from 'react';
import styled from 'styled-components';

import { UserTheme } from './components/UserTheme';
import { Color, Depth, Font } from './components/common/Mixins';
import LoaderImg from '../assets/img/LoaderImg.svg';

import Auth from './components/Auth';
import Home from './components/Home';
import produce from 'immer';
import firebase from './utils/Firebase';

const AppContainer = styled.div`
	height: 100%;
	width: 100vw;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: ${Color.White};
	position: relative;
	overflow-y: scroll;
	overflow-x: hidden;
	* {
		box-sizing: border-box;
	}
	display: none;
	@media (max-width: 500px) {
		display: flex;
	}
`

const DesktopMessage = styled.div`
	height: 100vh;
	width: 100vw;
	display: none;
	justify-content: center;
	align-items: center;
	padding: 50px;
	background-color: ${Color.White};
	h1 {
		${Font(600, 26)}
		text-align: center;
		color: ${Color.BlackLight};
	}
	@media (min-width: 500px) {
		display: flex;
	}
`

const Loader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${Color.White};
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${Depth('top')}
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				userActive: false,
				userId: ''
			},
			authLoading: true,
		}
	}

	componentDidMount() {
		this.authListener();
	}

	authListener = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setAuthLoading(true);
			if (user) {
				this.setUser(user.uid);
				this.setAuthLoading(false);
			} else {
				this.setUser('');
				this.setAuthLoading(false);
			}
		})
	}

	setAuthLoading = value => {
		this.setState(
			produce(draft => { draft.authLoading = value })
		)
	}

	setUser = (uid) => {
		if (uid.length > 0) {
			this.setState(
				produce(draft => {
					draft.user.userActive = true;
					draft.user.userId = uid;
				})
			)
		} else {
			this.setState(
				produce(draft => {
					draft.user.userActive = false;
					draft.user.userId = '';
				})
			)
		}
	}

	render() {
		return (
			<React.Fragment>
				<DesktopMessage>
					<h1>Desktop Version <br /> Coming Soon.</h1>
				</DesktopMessage>
				<AppContainer>
					<UserTheme
						user={this.state.user}
					>
						{this.state.authLoading ? ( <Loader> <img src={LoaderImg} /> </Loader> ) : null}
						{
							!this.state.user.userActive ? ( <Auth /> ) : ( <Home /> )
						}
					</UserTheme>
				</AppContainer>
			</React.Fragment>
		)
	}
}

export default App;