import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styled, { css } from 'styled-components';
import AdminContextComponent from './common/Contexts/AdminContext';
import Container from './common/Container';
import Header from './common/Header';
import Menu from './common/Menu';
import ListButton from './common/List/ListButton';
import Dropdown from './common/Dropdown';

const ListDropdown = styled(Dropdown)`
  ${props => {
    const { theme } = props;
    return css`
      border: none;
      border-bottom: 1px solid ${theme.colors.gray};
      max-width: 250px;
      margin: 0 auto;
    `;
  }};
`;

class ResetList extends Component {
  state = {
    categories: [],
    currentCategory: { name: '', key: '', statements: [] }
  };
  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories`)
      .once('value', snapshot => {
        let categories = snapshot.val();
        !!categories
          ? (categories = Object.values(categories))
          : (categories = []);
        this.setState({
          categories,
          currentCategory: !!categories[0]
            ? categories[0]
            : { name: '', key: '', statements: [] }
        });
      });
  }

  render() {
    const {
      currentCategory: { statements }
    } = this.state;
    const hasStatements = !!statements && statements.length > 0;
    console.log(hasStatements);
    return (
      <Container>
        <AdminContextComponent>
          <Header>
            <Menu />
          </Header>
          <ListDropdown
            placeholder={'Choose A Category...'}
            value={this.state.currentCategory.name}>
            {this.state.categories.map(category => (
              <button
                onClick={() => this.setState({ currentCategory: category })}>
                {category.name}
              </button>
            ))}
          </ListDropdown>
          <ListButton hasStatements={hasStatements} />
        </AdminContextComponent>
      </Container>
    );
  }
}

ResetList.propTypes = {};

export default ResetList;
