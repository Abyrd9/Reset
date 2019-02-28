import styled, { css } from 'styled-components';
import BackgroundImage from '../../../../img/BackgroundImage.png';

export const BackgroundImageContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100vw;
      height: 100vh;
      background-image: url(${BackgroundImage});
      background-color: ${theme.colors.white};
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;
  }}
`;
