import styled, { css } from 'styled-components';

export const AuthPageSwitcherStyles = styled.div`
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
