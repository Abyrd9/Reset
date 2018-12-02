import React, { Component } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AdminContextComponent, {
  AdminContext
} from './common/Contexts/AdminContext';
import Header from './common/Header';
import Container from './common/Container';
import Category from './common/Admin/Category';
import CreateStatement from './common/Admin/CreateStatement';
import StatementList from './common/Admin/StatementList';
import CategoryEdit from './common/Admin/CategoryEdit';

class Admin extends Component {
  state = {
    currentCategory: {
      name: '',
      categoryId: '',
      statements: []
    }
  };

  handleSetCurrentCategory = category => {
    this.setState({
      currentCategory: {
        name: category.name,
        categoryId: category.key,
        statements: !!category.statements
          ? Object.values(category.statements)
          : []
      }
    });
  };

  render() {
    return (
      <Container>
        <Header isAdmin />
        <AdminContextComponent>
          <Category
            currentCategory={this.state.currentCategory.name}
            handleSetCurrentCategory={category =>
              this.handleSetCurrentCategory(category)
            }
          />
          <CategoryEdit
            categoryId={this.state.currentCategory.categoryId}
            categoryName={this.state.currentCategory.name}
          />
          <StatementList categoryId={this.state.currentCategory.categoryId} />
          <CreateStatement category={this.state.currentCategory} />
        </AdminContextComponent>
      </Container>
    );
  }
}

Admin.propTypes = {};

export default Admin;
