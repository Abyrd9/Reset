import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Keygen from '../../helpers/Keygen';

export const AdminContext = React.createContext('Admin');

class AdminContextComponent extends Component {
  state = {
    handleCreateCategory: categoryName => this.handleCreateCategory(categoryName),
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

  handleCreateCategory = name => {
    const userId = this.getUserId();
    const categoryId = Keygen(this.state.categories);
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .set({ categoryId, name, statements: [] })
      .catch(err => console.log(err.code, err.message));
  };

  handleCreateStatement = async (categoryId, value) => {
    const userId = this.getUserId();
    try {
      let statements = await this.handleReadStatements(categoryId);
      statements = !!statements ? statements : [];
      const statementId = Keygen(statements);
      statements.push({ statementId, value });
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/`)
        .update({ statements })
        .catch(err => console.log(err.code, err.message));
    } catch (err) {
      console.log(err.code, err.message);
    }
  };

  handleReadCategories = () => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(`/users/${userId}/categories/`)
        .once('value', snapshot => {
          let categories = snapshot.val();
          categories ? (categories = Object.values(categories)) : (categories = []);
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
          let statements = snapshot.val();
          statements = !!statements ? statements : [];
          resolve(statements);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleReadStatement = (categoryId, statementId) => {
    const userId = this.getUserId();
    return new Promise(resolve => {
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/statements/${statementId}`)
        .once('value', snapshot => {
          let statement = snapshot.val();
          resolve(statement);
        })
        .catch(err => console.log(err.code, err.message));
    });
  };

  handleEditCategory = (categoryId, name) => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .update({ name })
      .catch(err => console.log(err.code, err.message));
  };

  handleEditStatement = async (categoryId, statementId, value) => {
    const userId = this.getUserId();
    try {
      let statements = await this.handleReadStatements(categoryId);
      statements = !!statements ? statements : [];
      statements = statements.map(statement => {
        if (statement.statementId === statementId) {
          statement.value = value;
        }
        return statement;
      });
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/`)
        .update({ statements })
        .catch(err => console.log(err.code, err.message));
    } catch (err) {
      console.log(err.code, err.message);
    }
  };

  handleDeleteCategory = categoryId => {
    const userId = this.getUserId();
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .remove()
      .catch(err => console.log(err.code, err.message));
  };

  handleDeleteStatement = async (categoryId, statementId) => {
    const userId = this.getUserId();
    try {
      let statements = await this.handleReadStatements(categoryId);
      statements = !!statements ? statements : [];
      statements = statements.filter(statement => statement.statementId !== statementId);
      console.log(statements);
      firebase
        .database()
        .ref(`/users/${userId}/categories/${categoryId}/`)
        .update({ statements })
        .catch(err => console.log(err.code, err.message));
    } catch (err) {
      console.log(err.code, err.message);
    }
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
    return <AdminContext.Provider value={this.state}>{this.props.children}</AdminContext.Provider>;
  }
}

AdminContextComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AdminContextComponent;
