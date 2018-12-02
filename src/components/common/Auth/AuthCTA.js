import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        margin-top: 10px;
        ${theme.font(12, 600)};
        color: ${theme.colors.primary};
        text-align: center;
      }
    `;
  }};
`;

class AuthCTA extends Component {
  render() {
    return (
      <Container>
        <Button onClick={this.props.onClick}>{this.props.children}</Button>
        {this.props.currentPage === 'signin' && (
          <a href="#" onClick={this.props.handleForgotPassword}>
            I forgot my password.
          </a>
        )}
      </Container>
    );
  }
}

AuthCTA.propTypes = {};

export default AuthCTA;
