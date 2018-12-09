import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavMenuStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      height: 100vh;
      width: 100%;
      overflow: scroll;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${theme.colors.white};
      padding-top: 60px;
      /* transition */
      visibility: ${props.menuOpen ? 'visible' : 'hidden'};
      opacity: ${props.menuOpen ? '1' : '0'};
      transition: ${props.menuOpen
        ? `visibility 0s linear, opacity 0.2s ${theme.ease}`
        : `opacity 0.2s ${theme.ease}, visibility 0s linear 0.2s`};
    `;
  }}
`;

export const NavCloseIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      right: 20px;
      top: 14px;
      font-size: 34px;
      color: ${theme.colors.primary};
    `;
  }}
`;

export const NavMenuList = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      div {
        &:first-of-type {
          li {
            border-top: 1px solid ${theme.colors.gray};
          }
        }
      }
    `;
  }}
`;
