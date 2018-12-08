import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DeleteIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      font-size: 18px;
      margin-right: 10px;
    `;
  }};
`;

export const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};};
    `;
  }};
`;

export const AdminCategoryEditStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${theme.colors.graySecondary};
      padding: 12px;
      margin-left: -15px;
      margin-right: -15px;
      label {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: relative;
        padding: 5px 0px;
        padding-top: 18px;
        border-bottom: 1px solid ${theme.colors.black};
        p {
          ${theme.font(12, 700)};
          color: ${theme.colors.gray};
          position: absolute;
          top: 0;
          left: 0;
        }
        input {
          flex: 1;
          ${theme.font(18, 700)};
          color: ${theme.colors.black};
          background-color: transparent;
          border: none;
        }
      }
    `;
  }}
`;
