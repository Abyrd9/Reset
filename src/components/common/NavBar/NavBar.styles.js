import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavBarStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      max-height: 75px;
      padding: 15px 20px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 30px;
      }
      background-color: ${theme.colors.white};
      z-index: ${theme.zIndex.top};
      box-shadow: ${props.isAdmin ? '0px 1px 3px rgba(0, 0, 0, .3)' : 'none'};
    `;
  }};
`;

export const NavBarIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      font-size: 26px;
      color: ${theme.colors.primary};
    `;
  }};
`;
