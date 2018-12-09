import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.gray};
      font-size: 12px;
    `;
  }};
`;

export const AuthInputStyled = styled.label`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      margin: 20px 0px;
      padding: 5px 8px;
      border-bottom: solid 1px ${theme.colors.gray};
      input {
        ${theme.font(16, 500)};
        color: ${theme.colors.black};
        background-color: transparent;
        padding-left: 9px;
        flex: 1;
        border: none;
        &:focus {
          outline: none;
        }
      }
      p {
        ${theme.font(18, 500)};
        color: ${theme.colors.gray};
        position: absolute;
        left: 28px;
        /* Transition */
        transition: ${theme.transition('all', 0.1)};
        transform-origin: left;
        transform: scale(1) translateY(0);
        opacity: ${props.hasText ? '0' : '1'};
      }
      &:focus-within {
        p {
          transform: scale(0.8) translateY(-30px);
        }
      }
    `;
  }};
`;
