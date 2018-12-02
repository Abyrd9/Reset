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
import Statement from './common/List/Statement';
import Loading from './common/Loading';

const ListDropdown = styled(Dropdown)`
  ${props => {
    const { theme } = props;
    return css`
      border: none;
      border-bottom: 1px solid ${theme.colors.gray};
      margin: 0 auto;
    `;
  }};
`;

class ResetList extends Component {
  state = {
    categories: [],
    currentCategory: { name: '', key: '', statements: [] },
    currentIndex: 0,
    dataLoading: false
  };

  componentDidMount() {
    this.setState({ dataLoading: true });
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
            : { name: '', key: '', statements: [] },
          dataLoading: false
        });
      });
  }

  handleChangeIndex = () => {
    const {
      currentCategory: { statements }
    } = this.state;
    const statementsArray = !!statements && Object.values(statements);
    let statementLength = statementsArray.length - 1;
    console.log(this.state.currentIndex, statementLength);
    if (this.state.currentIndex === statementLength) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  render() {
    const {
      currentCategory: { statements },
      currentIndex,
      dataLoading
    } = this.state;
    const hasStatements = !!statements && Object.values(statements).length > 0;
    const statementsArray = !!statements ? Object.values(statements) : [];
    return (
      <Container>
        <AdminContextComponent>
          <Header>
            <Menu />
          </Header>
          {dataLoading ? (
            <Loading>Loading...</Loading>
          ) : (
            <React.Fragment>
              <ListDropdown
                placeholder={'Choose A Category...'}
                value={this.state.currentCategory.name}>
                {this.state.categories.map(category => (
                  <button
                    onClick={() =>
                      this.setState({ currentCategory: category })
                    }>
                    {category.name}
                  </button>
                ))}
              </ListDropdown>
              <Statement
                value={
                  !!statementsArray[currentIndex] &&
                  statementsArray[currentIndex].value
                }
              />
              <ListButton
                hasStatements={hasStatements}
                handleChangeIndex={() => this.handleChangeIndex()}
              />
            </React.Fragment>
          )}
        </AdminContextComponent>
      </Container>
    );
  }
}

ResetList.propTypes = {};

export default ResetList;
