import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
        span {
          content: '';
          display: inline-block;
          width: 80px;
          height: 1px;
          background-color: ${theme.colors.gray};
        }
        p {
          color: ${theme.colors.blackSecondary};
          margin: 0px 10px;
          ${theme.font(14, 600)};
        }
      }
    `;
  }};
`;

const FacebookButton = styled(Button)`
  ${props => {
    const { theme } = props;
    return css`
      background-color: #3b5998;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 10px auto;
      ${theme.font(10, 400)};
      h4 {
        margin-left: 2px;
        ${theme.font(10, 600)};
      }
    `;
  }};
`;

const GoogleButton = styled(Button)`
  ${props => {
    const { theme } = props;
    return css`
      background-color: #dc483c;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 10px auto;
      ${theme.font(10, 400)};
      h4 {
        margin-left: 2px;
        ${theme.font(10, 600)};
      }
    `;
  }};
`;

class AuthSocial extends Component {
  render() {
    return (
      <Container>
        <div>
          <span />
          <p>or</p>
          <span />
        </div>
        <FacebookButton>
          Continue with <h4>Facebook</h4>
        </FacebookButton>
        <GoogleButton>
          Continue with <h4>Google</h4>
        </GoogleButton>
      </Container>
    );
  }
}

AuthSocial.propTypes = {};

export default AuthSocial;
