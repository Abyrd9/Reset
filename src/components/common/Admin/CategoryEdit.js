import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminContext } from '../../contexts/AdminContext';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      font-size: 20px;
      margin-left: 15px;
    `;
  }};
`;

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 20px 8px;
      position: relative;
      input {
        flex: 1;
        ${theme.font(18, 400)};
        color: ${theme.colors.blackSecondary};
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${theme.colors.blackSecondary};
        &:focus {
          outline: none;
        }
      }
      p {
        ${theme.font(12, 600)};
        colors: ${theme.colors.blackSecondary};
        position: absolute;
        top: 0;
        left: 8px;
      }
      h1 {
        ${theme.font(18, 400)};
        color: ${theme.colors.blackSecondary};
        text-align: left;
        flex: 1;
      }
    `;
  }}
`;

class CategoryEdit extends Component {
  static contextType = AdminContext;
  state = {
    isEditable: false,
    editCategoryName: this.props.categoryName
  };

  componentDidUpdate(prevProps) {
    if (this.props.categoryName !== prevProps.categoryName) {
      this.setState({ editCategoryName: this.props.categoryName });
    }
  }

  render() {
    const { categoryId, categoryName } = this.props;
    return (
      <Container>
        {!!categoryName && (
          <React.Fragment>
            <p>Category Name:</p>
            {this.state.isEditable ? (
              <input
                type="text"
                value={this.state.editCategoryName}
                onChange={e => this.setState({ editCategoryName: e.target.value })}
              />
            ) : (
              <h1>{categoryName}</h1>
            )}
            <div>
              {this.state.isEditable ? (
                <Icon
                  icon="save"
                  onClick={() => {
                    this.context.handleEditCategory(categoryId, this.state.editCategoryName);
                    this.setState({ isEditable: false });
                  }}
                />
              ) : (
                <Icon icon="edit" onClick={() => this.setState({ isEditable: true })} />
              )}

              <Icon
                icon="minus-circle"
                onClick={() => this.context.handleDeleteCategory(categoryId)}
              />
            </div>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

CategoryEdit.propTypes = {};

export default CategoryEdit;
