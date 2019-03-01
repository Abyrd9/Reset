import React from 'react';
import PropTypes from 'prop-types';

// components
import Background from '../visual/CommonComponents/Background/Background';
import AuthContainer from '../visual/AuthComponents/AuthContainer/AuthContainer';

// custom hooks
import useMediaQuery from '../functional/useMediaQuery';
import { useStore } from '../../state/store';

const AuthPage = ({}) => {
  const isDesktop = useMediaQuery(800);
  const {
    state: { isSignUpPage }
  } = useStore();
  return (
    <Background>
      <AuthContainer isDesktop={isDesktop} isSignUpPage={isSignUpPage} />
    </Background>
  );
};

AuthPage.propTypes = {};

export default AuthPage;
