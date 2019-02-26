import React from 'react';
import PropTypes from 'prop-types';
import { SocialButton, SocialIcon, SocialText } from './AuthSocialButton.styles';
import GoogleIcon from '../../../../img/google.svg';
import FacebookIcon from '../../../../img/facebook.svg';

const AuthSocialButton = ({ isGoogle, isFacebook, children }) => {
  let src = '';
  let alt = '';

  if (isGoogle) {
    src = GoogleIcon;
    alt = 'google logo';
  }

  if (isFacebook) {
    src = FacebookIcon;
    alt = 'facebook logo';
  }

  return (
    <SocialButton isGoogle={isGoogle} isFacebook={isFacebook}>
      <SocialIcon src={src} alt={alt} />
      <SocialText>{children}</SocialText>
    </SocialButton>
  );
};

AuthSocialButton.propTypes = {
  isGoogle: PropTypes.bool,
  isFacebook: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default AuthSocialButton;
