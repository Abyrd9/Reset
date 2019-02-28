import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '../functional/useMediaQuery';
import Background from '../visual/CommonComponents/Background/Background';
import AuthContainer from '../visual/AuthComponents/AuthContainer/AuthContainer';

const AuthPage = ({}) => {
  const isDesktop = useMediaQuery(800);
  return (
    <Background>
      <AuthContainer isDesktop={isDesktop} isSignUpPage={false} />
    </Background>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
