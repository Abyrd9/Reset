import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      height: 100%;
      height: 100vh;
      width: 100vw;
      overflow: scroll;
			padding: ${props.isAuth ? '40px 15px' : '70px 15px 82px 15px'}
			display: block;
			${props.isFlex &&
        css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      background-color: ${theme.colors.white};
    `;
  }};
`;

export default Container;
