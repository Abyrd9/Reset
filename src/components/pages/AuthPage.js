import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '../functional/useMediaQuery';
import DesktopBackground from '../visual/CommonComponents/DesktopBackground/DesktopBackground';
import AuthContainer from '../visual/AuthComponents/AuthContainer/AuthContainer';

const AuthPage = ({}) => {
  const isDesktop = useMediaQuery(700);
  return (
    <DesktopBackground>
      <AuthContainer isDesktop={isDesktop} isSignUpPage={true} />
    </DesktopBackground>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
