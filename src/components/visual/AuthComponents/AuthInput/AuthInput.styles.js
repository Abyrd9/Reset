import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputContainer = styled.div`
  ${props => {
    const { theme, isActive } = props;
    return css`
      width: 100%;
      padding: 8px;
      display: flex;
      align-items: center;
      transition: all 0.2s ${theme.ease};
      border-bottom: 1px solid ${isActive ? theme.colors.black : theme.colors.gray};
      margin: 10px 0px;
      position: relative;
    `;
  }}
`;

export const Label = styled.label`
  ${props => {
    const { theme } = props;
    return css`
      flex: 1;
      margin-left: 8px;
      position: relative;
      &:hover {
        cursor: text;
      }
    `;
  }}
`;

export const Placeholder = styled.p`
  ${props => {
    const { theme, isActive, hasText } = props;
    return css`
      ${theme.font(16, 500)};
      position: absolute;
      top: 2px;
      left: 0px;
      transition: all 0.2s ${theme.ease};
      color: ${isActive ? theme.colors.primary : theme.colors.gray};
      transform-origin: left;
      ${isActive
        ? 'transform: scale(0.8) translateY(-25px);'
        : 'transform: scale(1) translateY(0);'};
      opacity: ${hasText ? 0 : 1};
    `;
  }}
`;

export const Input = styled.input`
  ${props => {
    const { theme, isActive } = props;
    return css`
      ${theme.font(16, 500)};
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      transition: all 0.2s ${theme.ease};
      color: ${isActive ? theme.colors.black : theme.colors.gray};
    `;
  }}
`;

export const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme, isActive } = props;
    return css`
      transition: all 0.2s ${theme.ease};
      color: ${isActive ? theme.colors.primary : theme.colors.gray};
      font-size: 16px;
    `;
  }}
`;

export const CheckIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme, valueConfirmed } = props;
    return css`
      transition: all 0.2s ${theme.ease};
      opacity: ${valueConfirmed ? 1 : 0};
      color: ${theme.colors.green};
      font-size: 16px;
    `;
  }}
`;

export const ErrorMessage = styled.p`
  ${props => {
    const { theme, isActive, valueConfirmed } = props;
    return css`
      ${theme.font(10, 500)};
      position: absolute;
      top: calc(100% + 5px);
      left: 2px;
      color: ${theme.colors.primary};
      transition: all 0.2s ${theme.ease};
      opacity: ${isActive && !valueConfirmed ? 1 : 0};
    `;
  }}
`;
