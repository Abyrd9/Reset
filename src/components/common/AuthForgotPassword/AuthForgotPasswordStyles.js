import styled, { css } from 'styled-components';

export const AuthForgotPasswordStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      margin-top: 10px;
      display: flex;
      justify-content: center;
      a {
        margin-top: 14px;
        ${theme.font(16, 600)};
        color: ${theme.colors.primary};
        text-align: center;
      }
    `;
  }};
`;
