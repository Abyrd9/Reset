import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  ${props => {
    const { theme } = props;
    return css`
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      resize: none;
      border: none;
      outline: none;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      padding: 18px 12px;
      box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 -3px 6px rgba(0, 0, 0, 0.23);
    `;
  }}
`;

export const Ghost = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      padding: 18px 12px;
      border: none;
      box-sizing: border-box;
      left: 0;
      outline: none;
      overflow: hidden;
      position: absolute;
      top: 0;
      visibility: hidden;
      white-space: pre-wrap;
      width: 100%;
      word-wrap: break-word;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
    `;
  }}
`;

export const Label = styled.label`
  ${props => {
    const { theme } = props;
    return css`
      box-sizing: border-box;
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
    `;
  }}
`;
