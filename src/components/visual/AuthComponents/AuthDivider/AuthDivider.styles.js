import styled, { css } from 'styled-components';

export const DividerContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 95%;
      display: flex;
      align-items: center;
      margin: 10px 0px;
    `;
  }}
`;

export const DividerLine = styled.span`
  ${props => {
    const { theme } = props;
    return css`
      display: inline-block;
      height: 1px;
      flex: 1;
      background-color: ${theme.colors.gray};
    `;
  }}
`;

export const DividerText = styled.span`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(14, 700)};
      color: ${theme.colors.black};
      margin: 0px 15px;
    `;
  }}
`;
