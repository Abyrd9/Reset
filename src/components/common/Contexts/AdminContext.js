import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Keygen from '../../../helpers/Keygen';

export const AdminContext = React.createContext('Admin');

class AdminContextComponent extends Component {
  state = {
    handleCreateCategory: categoryName =>
      this.handleCreateCategory(categoryName),
    handleCreateStatement: (categoryId, statementValue) =>
      this.handleCreateStatement(categoryId, statementValue),
    handleReadCategories: () => this.handleReadCategories(),
    handleReadCategory: categoryId => this.handleReadCategory(categoryId),
    handleReadStatements: categoryId => this.handleReadStatements(categoryId),
    handleReadStatement: (categoryId, statementId) =>
      this.handleReadStatement(categoryId, statementId),
    handleEditCategory: (categoryId, categoryName) =>
      this.handleEditCategory(categoryId, categoryName),
    handleEditStatement: (categoryId, statementId, val) =>
      this.handleEditStatement(categoryId, statementId, val),
    handleDeleteCategory: categoryId => this.handleDeleteCategory(categoryId),
    handleDeleteStatement: (categoryId, statementId) =>
      this.handleDeleteStatement(categoryId, statementId),
    handleSetTimer: val => this.handleSetTimer(val),
    categories: []
  };

  getUserId = () => {
    if (!!firebase.auth().currentUser) {
      return firebase.auth().currentUser.uid;
    } else {
      return '';
    }
  };

  componentDidMount() {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/`)
      .on('value', snapshot => {
        let categories = snapshot.val();
        categories
          ? (categories = Object.values(categories))
          : (categories = []);
        this.setState({ categories });
      });
  }

  componentWillUnmount() {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/`)
      .off();
  }

  handleCreateCategory = categoryName => {
    const userId = this.getUserId();
    const categoryId = Keygen(this.state.categories);
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .set({ key: categoryId, name: categoryName, statements: [] })
      .catch(err => console.log(err.code, err.message));
  };

  handleCreateStatement = (categoryId, statementValue, statements = []) => {
    const userId = this.getUserId();
    const statementId = Keygen(statements);
    firebase
      .database()
      .ref(
        `/users/${userId}/categories/${categoryId}/statements/${statementId}`
      )
      .set({
        key: statementId,
        value: statementValue
      })
      .catch(err => console.log(err.code, err.message));
  };

  handleReadCategories = () => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(`/users/${userId}/categories/`)
        .once('value', snapshot => {
          let categories = snapshot.val();
          categories
            ? (categories = Object.values(categories))
            : (categories = []);
          resolve(categories);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleReadCategory = categoryId => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}`)
        .once('value', snapshot => {
          let category = snapshot.val();
          resolve(category);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleReadStatements = categoryId => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/statements`)
        .once('value', snapshot => {
          let categories = snapshot.val();
          categories
            ? (categories = Object.values(categories))
            : (categories = []);
          resolve(categories);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleReadStatement = (categoryId, statementId) => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(
          `/users/${userId}/categories/${categoryId}/statements/${statementId}`
        )
        .once('value', snapshot => {
          let statement = snapshot.val();
          resolve(statement);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleEditCategory = (categoryId, categoryName) => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .update({ name: categoryName })
      .catch(err => console.log(err.code, err.message));
  };

  handleEditStatement = (categoryId, statementId, val) => {
    // val is an object, i.e. { value: 'new value' }
    const userId = this.getUserId();
    firebase
      .database()
      .ref(
        `/users/${userId}/categories/${categoryId}/statements/${statementId}`
      )
      .update(val)
      .catch(err => console.log(err.code, err.message));
  };

  handleDeleteCategory = categoryId => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .remove()
      .catch(err => console.log(err.code, err.message));
  };

  handleDeleteStatement = (categoryId, statementId) => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(
        `/users/${userId}/categories/${categoryId}/statements/${statementId}`
      )
      .remove()
      .catch(err => console.log(err.code, err.message));
  };

  handleSetTimer = val => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/`)
      .update({ timer: val })
      .catch(err => console.log(err.code, err.message));
  };

  render() {
    return (
      <AdminContext.Provider value={this.state}>
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

AdminContextComponent.propTypes = {};

export default AdminContextComponent;
