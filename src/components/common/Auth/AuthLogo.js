import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Logo from '../../../img/Logo.png';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 25px;
      }
      h1 {
        ${theme.font(55, 900)};
        color: ${theme.colors.black};
        span {
          color: ${theme.colors.primary};
        }
      }
    `;
  }};
`;

const AuthLogo = ({}) => {
  return (
    <Container>
      <img src={Logo} />
      <h1>
        Reset
        <span>.</span>
      </h1>
    </Container>
  );
};

AuthLogo.propTypes = {};

export default AuthLogo;
