import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class StatementsListener extends Component {
  state = { statements: [] };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${this.props.categoryId}/statements`)
      .on('value', snapshot => {
        let statements = snapshot.val();
        statements = !!statements.length ? statements : [];
        this.setState({ statements });
      });
  }

  componentWillUnmount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${this.props.categoryId}/statements`)
      .off();
  }

  render() {
    return this.props.children(this.state);
  }
}

StatementsListener.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default StatementsListener;
