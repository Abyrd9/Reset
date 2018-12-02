import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Loading = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        text-align: center;
        ${theme.font(26, 600)};
        color: ${theme.colors.blackSecondary};
      }
    `;
  }};
`;

export default Loading;
