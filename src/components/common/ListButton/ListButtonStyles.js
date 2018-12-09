import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListButtonStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      p {
        ${theme.font(14, 700)};
        color: ${theme.colors.black};
        text-align: center;
        margin-top: 15px;
        opacity: ${props.buttonDisabled ? '1' : '0'};
        transition: ${theme.transition('all', 0.3)};
      }
    `;
  }}
`;

export const ListButtonPlusIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      font-size: 14px;
      color: ${theme.colors.white};
      margin-right: 8px;
    `;
  }}
`;
