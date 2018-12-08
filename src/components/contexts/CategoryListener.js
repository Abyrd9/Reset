import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class CategoryListener extends Component {
  state = { category: {} };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    const { categoryId } = this.props;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}/`)
      .on('value', snapshot => {
        let category = snapshot.val();
        this.setState({ category });
      });
  }

  componentWillUnmount() {
    const userId = firebase.auth().currentUser.uid;
    const { categoryId } = this.props;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}/`)
      .off();
  }

  render() {
    return this.props.children(this.state);
  }
}

CategoryListener.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default CategoryListener;
