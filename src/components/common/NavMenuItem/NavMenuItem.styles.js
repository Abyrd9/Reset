import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavMenuItemStyled = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(18, 600)};
      color: ${theme.colors.black};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      padding: 15px 0px;
      border-bottom: 1px solid ${theme.colors.gray};
    `;
  }}
`;

export const NavIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.blackSecondary};
      height: 20px;
      margin-left: 10px;
    `;
  }};
`;
