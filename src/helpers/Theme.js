import { css } from 'styled-components';

export default {
  font: (fontSize, fontWeight) => {
    return `
			font-size: ${fontSize}px;
			font-weight: ${fontWeight};
		`;
  },
  colors: {
    primary: '#EF233C',
    white: '#FFFFFF',
    black: '#1B1B1E ',
    gray: '#C0C0C1',
    graySecondary: '#F2F0F0'
  },
  media: {
    laptop: (...args) => css`
      @media (max-width: 1024px) {
        ${css(...args)};
      }
    `,
    tablet: (...args) => css`
      @media (max-width: 980px) {
        ${css(...args)};
      }
    `,
    phone: (...args) => css`
      @media (max-width: 425px) {
        ${css(...args)};
      }
    `
  },
  zIndex: {
    default: 0,
    bottom: 1,
    middle: 2,
    top: 3
  },
  transition: (property, time, delay = 0) => {
    return `${property} ${time}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
  },
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);',
  shadowPressed: '0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);'
};
