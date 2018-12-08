import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

export const AdminCreateStatementStyles = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    `;
  }}
`;

export const AdminCreateButton = styled(Button)`
  ${props => {
    const { theme } = props;
    return css`
      border-radius: 0px;
    `;
  }};
`;

export const AdminCreateAddIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      font-size: 24px;
    `;
  }};
`;
