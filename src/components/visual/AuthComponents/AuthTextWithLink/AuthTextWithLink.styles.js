import styled, { css } from 'styled-components';

export const TogglePageLink = styled.p`
  ${props => {
    const { theme, isCentered, topPadding } = props;
    return css`
      width: 100%;
      margin-top: ${topPadding || '20px' };
      margin-bottom: ${topPadding ? '15px' : '0px'}
      ${theme.font(12, 400)};
      color: ${theme.colors.gray};
      text-align: ${isCentered ? 'center' : 'left'};
      span {
        text-decoration: underline;
        ${theme.font(12, 500)};
        &:hover {
          cursor: pointer;
        }
      }
    `;
  }}
`;