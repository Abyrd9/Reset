import styled, { css } from 'styled-components';

export const ButtonListStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 20px;
      button:first-child {
        margin-right: 10px;
      }
    `;
  }}
`;
