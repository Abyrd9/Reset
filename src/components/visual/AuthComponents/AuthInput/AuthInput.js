import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  Label,
  Placeholder,
  Input,
  Icon,
  CheckIcon,
  ErrorMessage
} from './AuthInput.styles';

const AuthInput = ({
  icon,
  placeholder,
  type,
  value = '',
  onChange,
  valueConfirmed,
  valueErrorMessage
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasText = value.length > 0;
  return (
    <InputContainer isActive={isFocused || hasText}>
      <Icon icon={icon} isActive={isFocused || hasText} />
      <Label>
        <Input
          value={value}
          onChange={onChange}
          type={type}
          isActive={isFocused || hasText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={35}
        />
        <Placeholder isActive={isFocused} hasText={hasText}>
          {placeholder}
        </Placeholder>
      </Label>
      <CheckIcon icon="check" valueConfirmed={valueConfirmed} />
      <ErrorMessage isActive={isFocused} valueConfirmed={valueConfirmed}>
        {valueErrorMessage}
      </ErrorMessage>
    </InputContainer>
  );
};

AuthInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  valueConfirmed: PropTypes.bool,
  valueErrorMessage: PropTypes.string
};

export default AuthInput;
