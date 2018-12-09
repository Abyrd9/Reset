import React from 'react';
import PropTypes from 'prop-types';
import ResetIcon from '../../../img/ResetIcon.png';
import { AuthLogoHeaderStyled } from './AuthLogoHeader.styles';

const AuthLogo = ({}) => {
  return (
    <AuthLogoHeaderStyled>
      <img src={ResetIcon} />
      <h1>
        Reset
        <span>.</span>
      </h1>
    </AuthLogoHeaderStyled>
  );
};

AuthLogo.propTypes = {};

export default AuthLogo;
