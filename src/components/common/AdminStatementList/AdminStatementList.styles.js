import styled, { css } from 'styled-components';

export const AdminStatementListStyled = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      height: 100%;
      width: 100%;
      margin-left: -15px;
      margin-right: -15px;
    `;
  }}
`;
