import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './AuthButton.styles';

const AuthButton = ({ text, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

AuthButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default AuthButton;
