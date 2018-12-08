import { Component } from 'react';
import firebase from 'firebase';

class AuthContext extends Component {
  state = {
    handleSignIn: (email, password) => this.handleSignIn(email, password),
    handleSignUp: (name, email, password) => this.handleSignUp(name, email, password),
    handleSignOut: () => this.handleSignOut()
  };

  handleSignIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log(err.code, err.message));
  };

  handleSignUp = (name, email, password) => {
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(user => {
        firebase
          .database()
          .ref(`/users/${user.uid}/`)
          .set({ name });
      })
      .catch(err => console.log(err.code, err.message));
  };

  handleSignOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return this.props.children(this.state);
  }
}

export default AuthContext;
