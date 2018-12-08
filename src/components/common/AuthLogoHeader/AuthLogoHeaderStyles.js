import styled, { css } from 'styled-components';

export const AuthLogoHeaderStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 35px;
        margin-bottom: -12px;
      }
      h1 {
        ${theme.font(60, 700)};
        color: ${theme.colors.black};
        span {
          color: ${theme.colors.primary};
        }
      }
    `;
  }};
`;
