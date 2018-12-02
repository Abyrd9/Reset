import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(16, 400)};
      width: 100%;
      padding: 10px 5px;
      color: ${theme.colors.white};
      border-radius: ${props.isFlush ? '0px' : '3px'};
      background-color: ${props.isSecondary
        ? theme.colors.secondary
        : theme.colors.primary};
      box-shadow: ${theme.shadow};
      a {
        color: ${theme.colors.white};
      }
      &:active {
        box-shadow: ${theme.shadowPressed};
      }
      &:disabled {
        background-color: ${theme.colors.gray};
        color: ${theme.colors.blackSecondary};
      }
    `;
  }};
`;

const AuthButton = ({
  children,
  onClick,
  disabled,
  isSecondary,
  isFlush,
  className
}) => (
  <Button
    isFlush={isFlush}
    isSecondary={isSecondary}
    disabled={disabled}
    onClick={onClick}
    className={className}>
    {children}
  </Button>
);

export default AuthButton;
