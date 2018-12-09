import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropdownItemCreateIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      height: 16px;
      max-width: 15px;
    `;
  }};
`;

export const DropdownItemCreateStyled = styled.button`
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
