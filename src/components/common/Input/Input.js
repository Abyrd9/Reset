import React from 'react';
import PropTypes from 'prop-types';
import { InputIcon, AuthInputStyled } from './Input.styles';

const AuthInput = ({
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  disabled,
  icon,
  placeholder,
  maxLength
}) => {
  return (
    <AuthInputStyled hasText={!!value && value.length > 0}>
      {icon && <InputIcon icon={icon} />}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        maxLength={maxLength}
      />
      <p>{placeholder}</p>
    </AuthInputStyled>
  );
};

AuthInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number
};

export default AuthInput;
