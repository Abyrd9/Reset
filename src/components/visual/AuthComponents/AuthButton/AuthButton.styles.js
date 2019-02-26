import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      ${theme.font(16, 400)};
      padding: 10px 0px;
      box-shadow: ${theme.shadow};
      border-radius: 5px;
      transition: all 0.1s ${theme.ease};
      margin: 18px 0px;
      &:active {
        box-shadow: ${theme.shadowPressed};
      }
    `;
  }}
`;
