import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class CategoriesListener extends Component {
  state = { categories: [] };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories/`)
      .on('value', snapshot => {
        let categories = snapshot.val();
        categories ? (categories = Object.values(categories)) : (categories = []);
        this.setState({ categories });
      });
  }

  componentWillUnmount() {
    const auth = firebase.auth();
    if (!!auth.currentUser) {
      const userId = auth.currentUser.uid;
      firebase
        .database()
        .ref(`/users/${userId}/timer`)
        .off();
    }
  }

  render() {
    return this.props.children(this.state);
  }
}

CategoriesListener.propTypes = {};

export default CategoriesListener;
