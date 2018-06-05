import React, { Component } from 'react';
import PropTypes from 'prop-types';

import produce from 'immer';
import firebase from '../utils/Firebase';

import { KeyGen } from '../utils/KeyGen';

export const UserContext = React.createContext('user');

export class UserTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      quoteCreatorValue: '',
      user: {
        userId: '',
        userQuotes: [],
      },
    }
    this.changePage = this.changePage.bind(this);
    this.emailAuth = this.emailAuth.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
    this.createQuote = this.createQuote.bind(this);
    this.changeCreatorValue = this.changeCreatorValue.bind(this);
  }

  componentDidMount() {
    this.props.isRunningAuth();
    firebase.auth().onAuthStateChanged(user => {
      if (!!user) {
        this.setState(
          produce(draft => {
            draft.user.userId = user;
            draft.page = 'home';
          })
        )
        this.props.isUserActive();
        this.props.isRunningAuth();
      } else {
        this.setState(
          produce(draft => {
            draft.page = 'signUp';
          })
        )
        this.props.isRunningAuth();
      }
    })
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
    this.props.isRunningAuth();
    if (this.state.page === 'signUp') {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          this.props.isRunningAuth();
          this.props.isUserActive();
        })
        .catch(error => {
          console.log(error.code, error.message);
        })
    } else if (this.state.page === 'signIn') {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          this.props.isRunningAuth();
          this.props.isUserActive();
        })
        .catch(error => {
          console.log(error.code, error.message);
        })
    }
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
        changePage: this.changePage,
        emailAuth: this.emailAuth,
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