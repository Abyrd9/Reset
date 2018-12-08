import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AdminStatementToolListStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 55px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      span {
        display: inline-block;
        height: 40px;
        width: 2px;
        background-color: ${theme.colors.gray};
        margin-left: 15px;
      }
    `;
  }};
`;

export const AdminStatementToolIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      font-size: 16px;
      margin: 6px 0px;
      margin-left: 8px;
    `;
  }};
`;
