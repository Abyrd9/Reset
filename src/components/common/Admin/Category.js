import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { AdminContext } from '../../contexts/AdminContext';
import styled, { css } from 'styled-components';

// components
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddNewIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      height: 16px;
      max-width: 15px;
    `;
  }};
`;

const CancelButton = styled.p`
  ${props => {
    const { theme } = props;
    return css`
      margin-top: 10px;
      text-align: center;
      ${theme.font(16, 600)};
      color: ${theme.colors.blackSecondary};
    `;
  }};
`;

class Category extends Component {
  static contextType = AdminContext;
  state = { createNewCategory: false, newCategoryName: '' };

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    const { categoryId } = this.props.currentCategory;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${categoryId}`)
      .on('value', snapshot => {
        let category = snapshot.val();
        if (!!category) this.handleSetCurrentCategory(category.key);
      });
  }

  componentWillUnmount() {
    const user = firebase.auth().currentUser;
    if (!!user) {
      firebase
        .database()
        .ref(`/users/${user.uid}/timer`)
        .off();
    }
  }

  handleSetCurrentCategory = async categoryId => {
    try {
      const category = await this.context.handleReadCategory(categoryId);
      this.props.handleSetCurrentCategory(category);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.createNewCategory ? (
          <React.Fragment>
            <Input
              type="text"
              value={this.state.newCategoryName}
              onChange={e => this.setState({ newCategoryName: e.target.value })}
              icon="file-signature"
              placeholder="Category Name..."
            />
            <Button
              onClick={() => {
                this.setState({
                  newCategoryName: '',
                  createNewCategory: false
                });
                this.context.handleCreateCategory(this.state.newCategoryName);
              }}>
              Add Category
            </Button>
            <CancelButton onClick={() => this.setState({ createNewCategory: false })}>
              Cancel
            </CancelButton>
          </React.Fragment>
        ) : (
          <Dropdown placeholder="Select Category..." value={this.props.currentCategory}>
            {this.context.categories.map(category => (
              <button onClick={() => this.handleSetCurrentCategory(category.key)}>
                {category.name}
              </button>
            ))}
            <button
              onClick={() => {
                this.props.handleSetCurrentCategory({
                  name: '',
                  key: '',
                  statements: []
                });
                this.setState({ createNewCategory: true });
              }}>
              Create New Category... <AddNewIcon icon="plus-circle" />
            </button>
          </Dropdown>
        )}
      </React.Fragment>
    );
  }
}

Category.propTypes = {};

export default Category;
