import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(16, 400)};
      width: 100%;
      padding: 10px 5px;
      color: ${theme.colors.white};
      border-radius: 3px;
      background-color: ${theme.colors.primary};
      box-shadow: ${theme.shadow};
      &:active {
        box-shadow: ${theme.shadowPressed};
      }
      &:disabled {
        background-color: ${theme.colors.graySecondary};
        color: ${theme.colors.gray};
        box-shadow: none;
      }
    `;
  }};
`;
