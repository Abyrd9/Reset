import React from 'react';
import PropTypes from 'prop-types';
import { AuthPageSwitcherStyles } from './AuthPageSwitcherStyles';

const AuthPageSwitcher = ({ text, buttonText, onClick }) => {
  return (
    <AuthPageSwitcherStyles>
      <p>{text}</p>
      <a href="#" onClick={onClick}>
        {buttonText}
      </a>
    </AuthPageSwitcherStyles>
  );
};

AuthPageSwitcher.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

export default AuthPageSwitcher;
