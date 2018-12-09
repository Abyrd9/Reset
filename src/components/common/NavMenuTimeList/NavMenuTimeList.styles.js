import styled, { css } from 'styled-components';

export const NavMenuTimeListStyled = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      overflow: hidden;
      max-height: 0px;
      ${props.timerMenuOpen && 'max-height: 405px;'};
      transition: ${theme.transition('max-height', 0.5)};
    `;
  }}
`;
