import styled, { css } from 'styled-components';

export const AnimationBlockStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      visibility: ${props.isMounted ? 'visible' : 'hidden'};
      opacity: ${props.isMounted ? '1' : '0'};
      transform: ${props.isMounted ? 'translateY(0)' : 'translateY(20px)'};
      transition: opacity 0.3s ${theme.ease}, transform 0.3s ${theme.ease}, visibility 0s linear 0.3s;
      ${props.isMounted &&
        `
			transition: visibility 0s linear, opacity 0.3s ${theme.ease}, transform 0.3s ${theme.ease};
			`}
    `;
  }};
`;
