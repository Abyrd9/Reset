import React from 'react';
import PropTypes from 'prop-types';
import { AuthPageSwitcherStyled } from './AuthPageSwitcherStyled';

const AuthPageSwitcher = ({ text, buttonText, onClick }) => {
  return (
    <AuthPageSwitcherStyled>
      <p>{text}</p>
      <a href="#" onClick={onClick}>
        {buttonText}
      </a>
    </AuthPageSwitcherStyled>
  );
};

AuthPageSwitcher.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};

export default AuthPageSwitcher;
