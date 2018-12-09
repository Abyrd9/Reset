import styled, { css } from 'styled-components';

export const ButtonListStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 20px;
      button:first-child {
        margin-right: 10px;
      }
    `;
  }}
`;
