import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(72, 700)};
      color: ${theme.colors.white};
      img {
        height: 42px;
        margin-bottom: -2px;
      }
    `;
  }}
`;

export const Divider = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 255px;
      height: 1px;
      margin: 5px 0px 15px 0px;
      background-color: ${theme.colors.white};
    `;
  }}
`;

export const Subtitle = styled.h2`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(18, 600)};
      text-align: center;
      color: ${theme.colors.white};
    `;
  }}
`;
