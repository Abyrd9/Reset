import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavMenuTimeListItemStyles = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      && {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 15px 0px;
        border-bottom: 1px solid ${theme.colors.gray};
        ${theme.font(16, 600)};
        color: ${props.isSelected ? theme.colors.white : theme.colors.black};
        background-color: ${props.isSelected ? theme.colors.primary : 'transparent'};
      }
    `;
  }}
`;

export const NavCheckIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      position: absolute;
      right: 20px;
    `;
  }};
`;
