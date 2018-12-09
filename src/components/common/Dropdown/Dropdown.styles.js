import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DropdownIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.gray};
      height: 20px;
      max-width: 15px;
      transform: ${props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    `;
  }};
`;

export const DropdownButtonStyled = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0px;
      padding-top: 20px;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      ${theme.font(18, 600)};
      position: relative;
      border-bottom: 1px solid ${theme.colors.gray};
      && {
        margin-top: 10px;
        margin-bottom: 15px;
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        ${theme.font(12, 700)};
        color: ${theme.colors.gray};
      }
    `;
  }};
`;

export const DropdownListStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      width: 100%;
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow};
      transition: opacity 0.2s ${theme.ease}, transform 0.2s ${theme.ease},
        visibility 0s linear 0.2s;
      visibility: hidden;
      transform: translateY(-5px);
      opacity: 0;
      z-index: ${theme.zIndex.middle};
      ${props.isOpen &&
        `
				transition: visibility 0s linear, opacity .2s ${theme.ease}, transform .2s ${theme.ease};
				visibility: visible;
				transform: translateY(0);
				opacity: 1;
			`};
    `;
  }};
`;
