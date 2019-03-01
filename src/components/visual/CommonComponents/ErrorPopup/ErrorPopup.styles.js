import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ErrorPopupContainer = styled.div`
  ${props => {
    const { theme, timer } = props;
    return css`
      position: absolute;
      bottom: 15px;
      left: 15px;
      max-width: 450px;
      padding: 25px;
      padding-right: 40px;
      border-radius: 5px;
      background-color: rgba(248, 51, 60, 0.8);
      border: 2px solid #f8333c;
      display: flex;
      align-items: baseline;
      animation-name: ${popupAnimation};
      animation-duration: ${`${timer.toString()}s`};
      animation-timing-function: ${theme.ease};
    `;
  }}
`;

const popupAnimation = keyframes`
	0% {
		transform: translateY(10px);
		opacity: 0;
	}
	5% {
		transform: translateY(0px);
		opacity: 1;
	}
	95% {
		transform: translateY(0px);
		opacity: 1;
	}
	100% {
		transform: translateY(10px);
		opacity: 0;
	}
`;

export const ErrorMessage = styled.p`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(16, 500)};
      color: ${theme.colors.white};
    `;
  }}
`;

export const ExitIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      font-size: 18px;
      position: absolute;
      top: 8px;
      right: 10px;
      &:hover {
        cursor: pointer;
      }
    `;
  }}
`;
