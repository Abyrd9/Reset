import styled, { css } from 'styled-components';

export const AdminCategoryCreateStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      text-align: center;
      a {
        ${theme.font(16, 700)};
        color: ${theme.colors.black};
        display: block;
        margin-top: 10px;
        text-decoration: underline;
      }
    `;
  }}
`;
