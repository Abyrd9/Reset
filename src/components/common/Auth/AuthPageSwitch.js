import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      p {
        ${theme.font(16, 600)};
        color: ${theme.colors.primary};
      }
      a {
        margin-left: 3px;
        ${theme.font(16, 800)};
        color: ${theme.colors.primary};
        text-decoration: underline;
      }
    `;
  }};
`;

const AuthPageSwitch = ({ text, buttonText, onClick }) => {
  return (
    <Container>
      <p>{text}</p>
      <a href="#" onClick={onClick}>
        {buttonText}
      </a>
    </Container>
  );
};

AuthPageSwitch.propTypes = {};

export default AuthPageSwitch;
