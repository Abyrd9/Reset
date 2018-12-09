import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class StatementsListener extends Component {
  state = { statements: [] };

  componentDidMount() {
    const { categoryId } = this.props;
    if (!!categoryId) {
      this.setListener(categoryId);
    }
  }

  componentDidUpdate(prevProps) {
    const { categoryId } = this.props;
    if (prevProps.categoryId !== categoryId) {
      if (!!prevProps.categoryId) {
        this.removeListener(prevProps.categoryId);
      }
      if (!!categoryId) {
        this.setListener(categoryId);
      }
    }
  }

  componentWillUnmount() {
    const { categoryId } = this.props;
    if (!!categoryId) {
      this.removeListener(categoryId);
    }
  }

  setListener = categoryId => {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}/statements`)
      .on('value', snapshot => {
        let statements = snapshot.val();
        statements = !!statements && statements.length > 0 ? statements : [];
        this.setState({ statements });
      });
  };

  removeListener = categoryId => {
    const auth = firebase.auth();
    if (!!auth.currentUser) {
      const userId = auth.currentUser.uid;
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/statements`)
        .off();
    }
  };

  render() {
    return this.props.children(this.state);
  }
}

StatementsListener.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default StatementsListener;
