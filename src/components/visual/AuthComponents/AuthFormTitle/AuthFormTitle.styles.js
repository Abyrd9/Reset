import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
    `;
  }}
`;

export const Title = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      ${theme.font(24, 500)};
      color: ${theme.colors.primary};
    `;
  }}
`;

export const Divider = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 110px;
      height: 2.5px;
      background-color: ${theme.colors.primary};
      margin: 8px 0px;
    `;
  }}
`;
