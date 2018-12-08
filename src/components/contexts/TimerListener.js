import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class TimerListener extends Component {
  state = { timer: 0 };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/timer`)
      .on('value', snapshot => {
        const timer = snapshot.val();
        if (!!timer) {
          this.setState({ timer });
        }
      });
  }

  componentWillUnmount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/timer`)
      .off();
  }

  render() {
    return this.props.children(this.state);
  }
}

TimerListener.propTypes = {};

export default TimerListener;
