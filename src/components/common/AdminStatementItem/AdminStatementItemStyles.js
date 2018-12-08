import styled, { css } from 'styled-components';

export const AdminStatementItemStyles = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(16, 700)};
      color: ${theme.colors.black};
      width: 100%;
      min-height: 80px;
      padding: 10px 0px;
      border-bottom: 1px solid ${theme.colors.gray};
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
  }}
`;
