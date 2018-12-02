import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AuthInputContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
    `;
  }};
`;

const InputIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.gray};
      margin-right: 10px;
      height: 16px;
    `;
  }};
`;

const AuthInputStyled = styled.label`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      border-bottom: solid 1px ${theme.colors.gray};
      position: relative;
      display: flex;
      align-items: center;
      margin: 20px 0px;
      padding: 5px 2px;
      &:focus-within {
        p {
          transform: scale(0.8) translateY(-30px);
        }
      }
      input {
        flex: 1;
        background-color: transparent;
        border: none;
        color: ${theme.colors.black};
        ${theme.font(18, 500)};
        &:focus {
          outline: none;
        }
      }
      p {
        left: 28px;
        position: absolute;
        color: ${theme.colors.blackSecondary};
        ${theme.font(18, 500)};
        transition: ${theme.transition('all', 0.1)};
        transform-origin: left;
        transform: scale(1) translateY(0);
        opacity: ${props.hasText ? '0' : '1'};
      }
    `;
  }};
`;

const AuthInput = ({
  type,
  value,
  disabled,
  onChange,
  onFocus,
  onBlur,
  icon,
  placeholder,
  maxLength
}) => {
  return (
    <AuthInputStyled hasText={!!value && value.length > 0}>
      <InputIcon icon={icon} />
      <input
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
        disabled={disabled}
      />
      <p>{placeholder}</p>
    </AuthInputStyled>
  );
};

AuthInput.propTypes = {};

export default AuthInput;
