import styled, { css } from 'styled-components';
import Button from '../Button/Button';

export const AuthSocialBlockStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
        span {
          content: '';
          display: inline-block;
          width: 80px;
          height: 1px;
          background-color: ${theme.colors.gray};
        }
        p {
          color: ${theme.colors.blackSecondary};
          margin: 0px 10px;
          ${theme.font(16, 700)};
        }
      }
    `;
  }};
`;

export const FacebookButton = styled(Button)`
  ${props => {
    const { theme } = props;
    return css`
      background-color: #3b5998;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 10px auto;
      ${theme.font(14, 400)};
      h4 {
        margin-left: 3px;
        ${theme.font(14, 600)};
      }
    `;
  }};
`;

export const GoogleButton = styled(Button)`
  ${props => {
    const { theme } = props;
    return css`
      background-color: #dc483c;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 10px auto;
      ${theme.font(14, 400)};
      h4 {
        margin-left: 3px;
        ${theme.font(14, 600)};
      }
    `;
  }};
`;
