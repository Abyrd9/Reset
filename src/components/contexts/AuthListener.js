import { Component } from 'react';
import firebase from 'firebase';

class AuthListener extends Component {
  state = {
    isAuthenticated: false,
    user: {},
    userId: null,
    isLoading: false
  };

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          user,
          userId: user.uid,
          isLoading: false
        });
      } else {
        this.setState({
          isAuthenticated: false,
          user: {},
          userId: null,
          isLoading: false
        });
      }
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.authListener();
  }

  componentWillUnmount() {
    this.authListener = null;
  }

  render() {
    return this.props.children(this.state);
  }
}

export default AuthListener;
