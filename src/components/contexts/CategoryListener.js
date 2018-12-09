import { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class CategoryListener extends Component {
  state = { category: {} };

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
      .ref(`/users/${userId}/categories/${categoryId}/`)
      .on('value', snapshot => {
        let category = snapshot.val();
        this.setState({ category });
      });
  };

  removeListener = categoryId => {
    const auth = firebase.auth();
    if (!!auth.currentUser) {
      const userId = auth.currentUser.uid;
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/`)
        .off();
    }
  };

  render() {
    return this.props.children(this.state);
  }
}

CategoryListener.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default CategoryListener;
