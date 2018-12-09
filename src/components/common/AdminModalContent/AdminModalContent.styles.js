import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AdminModalContentStyled = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      ${theme.font(16, 700)};
      color: ${theme.colors.black};
      text-align: center;
      h3 {
        ${theme.font(12, 700)};
        color: ${theme.colors.gray};
        text-align: ${props.isCentered ? 'center' : 'left'};
        margin-bottom: 15px;
      }
      /* Doing this to overried stylings on AutoSizeInput */
      textarea {
        box-shadow: none;
        border: 1px solid ${theme.colors.black};
      }
    `;
  }}
`;

export const AdminModalContentIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      font-size: 20px;
    `;
  }};
`;
