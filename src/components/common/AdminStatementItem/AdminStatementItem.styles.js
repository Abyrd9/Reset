import styled, { css } from 'styled-components';

export const AdminStatementItemStyled = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(16, 700)};
      color: ${theme.colors.black};
      min-height: 80px;
      padding: 10px 15px;
      border-bottom: 1px solid ${theme.colors.gray};
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-left: -15px;
      margin-right: -15px;
      &:last-of-type {
        margin-bottom: 10px;
      }
    `;
  }}
`;
