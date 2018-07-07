import React, { Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer';
import firebase from '../utils/Firebase';
import { KeyGen } from '../utils/KeyGen';
import isEqual from 'lodash.isequal';

export const UserContext = React.createContext('user');
const database = firebase.database();

export class UserTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      quoteCreatorValue: '',
			userQuotes: [],
    }
	}

	componentDidMount() {
		if (this.props.user.userActive) {
			const ref = database.ref(`users/${this.props.user.userId}`).once('value')
				.then(snapshot => {
					const quotes = snapshot.val().quotes || [];
				})
				.catch(err => {
					console.log(err);
				})
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		const authChangeSignIn = !prevProps.user.userActive && this.props.user.userActive;
		if (authChangeSignIn) {
			const ref = database.ref(`users/${this.props.user.userId}`).once('value')
				.then(snapshot => {
					const quotes = snapshot.val().quotes || [];
					this.setState(
						produce(draft => { draft.userQuotes = quotes })
					)
				})
				.catch(err => {
					console.log(err);
				})
		}
		if (!isEqual(prevState.userQuotes, this.state.userQuotes) && this.props.user.userActive && !authChangeSignIn) {
			this.updateFirebase();
		}
	}

	updateFirebase = () => {
		if (this.props.user.userActive) {
			const quotes = this.state.userQuotes;
			firebase.database().ref(`users/${this.props.user.userId}`).update({ quotes })
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

	signOut = () => {
		firebase.auth().signOut().then(() => {
			console.log("User successfuly signed out")
		}).catch(error => console.log(error))
	}

  createQuote = (value) => {
		// Check if any current quotes are active in any way
		const isActive = this.state.userQuotes.some(quote => 
			quote.toolsVisible || quote.isDeletable || quote.isEditable
		);
		// Generate new quote Key
		const quoteKey = KeyGen(this.state.userQuotes);
		// Create Quote Object
		const quote = {
			quoteKey,
			value,
			toolsVisible: false,
			isDeletable: false,
			isEditable: false,
		}
		// If the value isn't empty and no quotes are currently active, add to quote list
		if (value !== '' && !isActive) {
			this.setState(
				produce(draft => {
					draft.quoteCreatorValue = '';
					draft.userQuotes.push(quote)
				})
			)
		}
	}

  changeQuote = (keyToChange, value, key) => {
		this.setState(
			produce(draft => {

				// Make sure clicking a non-active quote doesn't trigger anything
				const filteredQuotes = draft.userQuotes.filter(quote => quote.quoteKey !== key);
				const notActive = filteredQuotes.every(quote => {
					if (!quote.isDeletable && !quote.isEditable && !quote.toolsVisible) {
						return true;
					} else {
						return false;
					}
				})

				draft.userQuotes.forEach((quote, index) => {
					// If the key is reset, this means reset all values to false
					if (keyToChange === 'reset') {
						quote.toolsVisible = false;
						quote.isDeletable = false;
						quote.isEditable = false;
					}
					// if the quote key is equal to the passed key, and it's not active
					// run the switch
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
								draft.userQuotes.splice(index, 1);
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
				quoteCreatorValue: this.state.quoteCreatorValue,
				changeCreatorValue: this.changeCreatorValue,
				createQuote: this.createQuote,
				changeQuote: this.changeQuote,
				quotes: this.state.userQuotes,
				changePage: this.changePage,
        page: this.state.page,
				signOut: this.signOut,
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