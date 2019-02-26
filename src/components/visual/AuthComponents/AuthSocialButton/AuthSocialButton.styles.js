import styled, { css } from 'styled-components';

export const SocialButton = styled.button`
  ${props => {
    const { theme, isGoogle, isFacebook } = props;
    return css`
      ${isGoogle && `background-color: ${theme.colors.google}`};
      ${isFacebook && `background-color: ${theme.colors.facebook}`};
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      margin-top: 10px;
      width: 85%;
      box-shadow: ${theme.shadow};
      border-radius: 5px;
      transition: all 0.1s ${theme.ease};
      &:active {
        box-shadow: ${theme.shadowPressed};
      }
    `;
  }}
`;

export const SocialIcon = styled.img`
  ${props => {
    const { theme } = props;
    return css`
      max-width: 12px;
      max-height: 16px;
      position: absolute;
      left: 12px;
    `;
  }}
`;

export const SocialText = styled.span`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(14, 400)};
      color: ${theme.colors.white};
    `;
  }}
`;
