import styled, { css } from 'styled-components';

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
			height: 100%;
			min-height: 100vh;
      width: 100%;
      overflow: scroll;
			padding: ${props.isAuth ? '40px 15px' : '75px 15px 92px 15px'}
			display: block;
			${props.isFlex &&
        css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
        `}
      background-color: ${theme.colors.white};
    `;
  }};
`;

export default Container;
