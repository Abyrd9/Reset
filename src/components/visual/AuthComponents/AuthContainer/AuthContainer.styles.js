import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props => {
    const { theme, isDesktop } = props;
    return css`
      width: 100%;
      height: 100%;
      max-width: 920px;
      max-height: ${isDesktop ? '600px' : 'none'};
      background-color: ${theme.colors.white};
      display: flex;
      flex-direction: ${isDesktop ? 'row' : 'column'};
      justify-content: center;
      align-items: center;
      box-shadow: ${theme.shadow};
      padding: ${isDesktop ? '0' : '0px 15px'};
    `;
  }}
`;

export const LeftContainerBlock = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.primary};
      padding: 25px 50px;
      min-width: 460px;
    `;
  }}
`;

export const RightContainerBlock = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.white};
      padding: 25px 80px;
      min-width: 460px;
    `;
  }}
`;
