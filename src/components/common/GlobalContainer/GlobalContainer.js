import styled, { css } from 'styled-components';

const GlobalContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
			height: 100vh;
      width: 100%;
      overflow: scroll;
			padding: ${props.isAdmin ? '70px 15px 105px 15px' : '60px 15px'};
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

export default GlobalContainer;
