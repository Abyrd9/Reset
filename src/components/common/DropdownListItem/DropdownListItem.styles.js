import styled, { css } from 'styled-components';

export const DropdownListItemStyled = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: 15px 10px;
      border-bottom: 1px solid ${theme.colors.blackSecondary};
      color: ${theme.colors.black};
      ${theme.font(16, 600)};
      &:last-child {
        border: none;
      }
    `;
  }}
`;
