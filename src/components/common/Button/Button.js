import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyles } from './ButtonStyles';

const Button = ({ children, onClick, disabled, className }) => (
  <ButtonStyles disabled={disabled} onClick={onClick} className={className}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isFlush: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Button;
