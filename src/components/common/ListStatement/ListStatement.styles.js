import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListStatementStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      p {
        width: 100%;
        min-height: 165px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        z-index: ${theme.zIndex.middle};
        text-align: left;
        ${theme.font(26, 600)};
        color: ${theme.colors.black};
        /* transition */
        opacity: ${props.isTransitioned ? '1' : '0'};
        transform: ${props.isTransitioned ? 'translateY(0)' : 'translateY(-10px)'};
        ${props.isTransitioned && `transition: ${theme.transition('all', 0.5, 0.2)};`};
      }
    `;
  }};
`;

export const QuoteIconLeft = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      color: ${theme.colors.graySecondary};
      font-size: 112px;
      left: 0;
      top: 0;
      z-index: -1;
      /* transition */
      opacity: ${props.isTransitioned ? '1' : '0'};
      transform: ${props.isTransitioned ? 'translateY(-40px)' : 'translateY(-50px)'};
      ${props.isTransitioned && `transition: ${theme.transition('all', 0.5, 0.1)};`};
    `;
  }};
`;

export const QuoteIconRight = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      color: ${theme.colors.graySecondary};
      font-size: 112px;
      right: 0;
      bottom: 0;
      z-index: -1;
      /* transition */
      opacity: ${props.isTransitioned ? '1' : '0'};
      transform: ${props.isTransitioned ? 'translateY(40px)' : 'translateY(30px)'};
      ${props.isTransitioned && `transition: ${theme.transition('all', 0.5)};`};
    `;
  }};
`;
