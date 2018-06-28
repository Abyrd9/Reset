import React, { Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer';
import firebase from '../utils/Firebase';

import { KeyGen } from '../utils/KeyGen';

export const UserContext = React.createContext('user');
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const database = firebase.database();

export class UserTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      quoteCreatorValue: '',
      user: {
				name: '',
				email: '',
        userId: '',
        userQuotes: [],
      },
    }
  }

  componentDidMount() {
    this.props.setIsRunningAuth();
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
				const userId = user.uid;
				firebase.database().ref(`users/${userId}/quotes`).once(`value`).then(snapshot => {
					let quotes = snapshot.val();
					console.log(quotes);
					quotes = quotes === null ? [] : quotes;
					this.setState(
						produce(draft => {
							draft.user.name = user.displayName;
							draft.user.email = user.email;
							draft.user.userId = user.uid;
							draft.user.userQuotes = Object.values(quotes);;
							draft.page = 'home';
						})
					)
					this.props.setIsUserActive();
					this.props.setIsRunningAuth();
				})

      } else {
        this.setState(
          produce(draft => {
            draft.page = 'signIn';
          })
        )
        this.props.setIsRunningAuth();
      }
    })
	}

	componentDidUpdate() {
		if (this.props.isUserActive && !this.props.isRunningAuth) this.updateFirebase();
		firebase.auth().onAuthStateChanged(user => {
      if (!!user && !!user !== this.props.isUserActive) {
				this.props.setIsUserActive()
				if (!!user) {
					this.setState(
						produce(draft => {
							draft.user.name = user.displayName;
							draft.user.email = user.email;
							draft.user.userId = user.uid;
							draft.page = 'home';
						})
					)
				} else {
					this.setState(
						produce(draft => {
							draft.page = 'signIn';
						})
					)
				}
			}
    });
	}

	updateFirebase = () => {
		if (this.props.isUserActive) {
			const userId = firebase.auth().currentUser.uid;
			const quotes = this.state.user.userQuotes;
			firebase.database().ref(`users/${userId}`).update({
				quotes,
			}, error => {
				console.log(error);
			})
		}
	}

  changePage = (value) => {
    this.setState(
      produce(draft => {
        draft.page = value;
      })
    )
  }

  changeCreatorValue = (value) => {
		this.setState(
			produce(draft => {
				draft.quoteCreatorValue = value;
			})
		)
  }

  emailAuth = (email, password, name) => {
    this.props.setIsRunningAuth();
    if (this.state.page === 'signUp') {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
					console.log(response);
					const userId = response.user.uid;
					console.log(userId);
					firebase.database().ref(`users/${userId}`).update({
						name,
					}, error => console.log(error))
          this.props.setIsRunningAuth();
          this.props.setIsUserActive();
        })
        .catch(error => {
          console.log(error.code, error.message);
        })
    } else if (this.state.page === 'signIn') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          this.props.setIsRunningAuth();
          this.props.setIsUserActive();
        })
        .catch(error => {
          console.log(error.code, error.message);
        })
    }
	}
	
	googleAuth = () => {
		firebase.auth().signInWithPopup(googleProvider).then(result => {
			const token = result.credential.accessToken;
			const user = result.user;
			firebase.database().ref(`users/${userId}`).update({
				name: user.displayName,
			}, error => console.log(error))
		}).catch(error => {
			console.log(error.code, error.message, error.email, error.credential);
		})
	}

	facebookAuth = () => {
		firebase.auth().signInWithPopup(facebookProvider).then(result => {
			console.log(result)
			const token = result.credential.accessToken;
			const user = result.user;
			console.log(token, user)
		}).catch(error => {
			console.log(error.code, error.message, error.email, error.credential);
		})
	}

	passwordReset = (email) => {
		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				console.log("Email Has Been Sent!");
			})
			.catch(err => {
				console.log(err)
			})
	}

	signOut = () => {
		firebase.auth().signOut().then(() => {
			console.log("User successfuly signed out")
			this.props.setIsUserActive(false);
		}).catch(error => console.log(error))
	}

  createQuote = (value) => {
		const isActive = this.state.user.userQuotes.some(quote => 
			quote.toolsVisible || quote.isDeletable || quote.isEditable
		);
		const quoteKey = KeyGen(this.state.user.userQuotes);
		const quote = {
			quoteKey,
			value,
			toolsVisible: false,
			isDeletable: false,
			isEditable: false,
		}
		if (value !== '' && !isActive) {
			this.setState(
				produce(draft => {
					draft.quoteCreatorValue = '';
					draft.user.userQuotes.push(quote)
				})
			)
		}
	}

  changeQuote = (keyToChange, value, key) => {
		this.setState(
			produce(draft => {

				// Make sure clicking a non-active quote doesn't trigger anything
				const filteredQuotes = draft.user.userQuotes.filter(quote => quote.quoteKey !== key);
				const notActive = filteredQuotes.every(quote => {
					if (!quote.isDeletable && !quote.isEditable && !quote.toolsVisible) {
						return true;
					} else {
						return false;
					}
				})

				draft.user.userQuotes.forEach((quote, index) => {
					if (keyToChange === 'reset') {
						quote.toolsVisible = false;
						quote.isDeletable = false;
						quote.isEditable = false;
					}
					if (quote.quoteKey === key && notActive) {
						switch(keyToChange) {
							case 'value':
								quote.value = value;
								quote.toolsVisible = false;
								quote.isDeletable = false;
								quote.isEditable = false;
								break;
							case 'toolsVisible':
								if (!quote.isEditable) {
									quote.toolsVisible = value; 
								}
								break;
							case 'isDeletable':
								console.log("is this running?")
								quote.isDeletable = value;
								quote.toolsVisible = false;
								quote.isEditable = false;
								break;
							case 'isEditable':
								quote.isEditable = value;
								quote.toolsVisible = false;
								quote.isDeletable = false;
								break;
							case 'deleteQuote':
								draft.user.userQuotes.splice(index, 1);
							default:
								quote[keyToChange] = value;
						}
					}
				})
			})
		)
	}

  render() {
    return (
      <UserContext.Provider value={{
        page: this.state.page,
				quotes: this.state.user.userQuotes,
				quoteCreatorValue: this.state.quoteCreatorValue,
        changePage: this.changePage,
				emailAuth: this.emailAuth,
				googleAuth: this.googleAuth,
				facebookAuth: this.facebookAuth,
				signOut: this.signOut,
        changeQuote: this.changeQuote,
        createQuote: this.createQuote,
				changeCreatorValue: this.changeCreatorValue,
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

UserTheme.propTypes = {
  children: PropTypes.node,
};

export default UserTheme;