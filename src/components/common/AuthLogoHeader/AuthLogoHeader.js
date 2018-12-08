import React from 'react';
import PropTypes from 'prop-types';
import ResetIcon from '../../../img/ResetIcon.png';
import { AuthLogoHeaderStyles } from './AuthLogoHeaderStyles';

const AuthLogo = ({}) => {
  return (
    <AuthLogoHeaderStyles>
      <img src={ResetIcon} />
      <h1>
        Reset
        <span>.</span>
      </h1>
    </AuthLogoHeaderStyles>
  );
};

AuthLogo.propTypes = {};

export default AuthLogo;
