import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styled, { css } from 'styled-components';
import StatementItem from './StatementItem';

const BackDrop = styled.span`
  ${props => {
    const { theme } = props;
    return css`
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      margin: 0;
      z-index: ${theme.zIndex.middle};
    `;
  }};
`;

const StatementsList = styled.div`
  ${props => {
    const { theme } = props;
    return css``;
  }};
`;

class StatementList extends Component {
  state = { statements: [], activeStatement: '', toolsVisibleStatement: '' };

  componentDidUpdate(prevProps) {
    if (prevProps.categoryId !== this.props.categoryId) {
      const userId = firebase.auth().currentUser.uid;
      if (prevProps.categoryId.length > 0) {
        firebase
          .database()
          .ref(`/users/${userId}/categories/${prevProps.categoryId}/statements`)
          .off();
      }
      firebase
        .database()
        .ref(`/users/${userId}/categories/${this.props.categoryId}/statements`)
        .on('value', snapshot => {
          let statements = snapshot.val();
          !!statements
            ? (statements = Object.values(statements))
            : (statements = []);
          this.setState({ statements });
        });
    }
  }

  componentWillUnmount() {
    const userId = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/users/${userId}/categories/${this.props.categoryId}/statements`)
      .off();
  }

  setToolsVisible = val => this.setState({ toolsVisibleStatement: val });

  setActiveStatement = val => this.setState({ activeStatement: val });

  render() {
    const { categoryId } = this.props;
    const { statements } = this.state;
    return (
      <StatementsList isActive={this.state.activeStatement.length > 0}>
        {!!statements &&
          statements.map((statement, i) => (
            <StatementItem
              categoryId={categoryId}
              setToolsVisible={this.setToolsVisible}
              setActiveStatement={this.setActiveStatement}
              toolsVisible={statement.key === this.state.toolsVisibleStatement}
              isActive={statement.key === this.state.activeStatement}
              key={statement.key}
              statementId={statement.key}
              value={statement.value}
            />
          ))}
        {this.state.activeStatement.length > 0 && <BackDrop />}
      </StatementsList>
    );
  }
}

StatementList.propTypes = {};

export default StatementList;
