import React from 'react';
import PropTypes from 'prop-types';

// components
import Background from '../visual/CommonComponents/Background/Background';
import AuthContainer from '../visual/AuthComponents/AuthContainer/AuthContainer';
import AuthSignInForm from '../visual/AuthComponents/AuthSignInForm/AuthSignInForm';

// custom hooks
import useMediaQuery from '../helpers/useMediaQuery';

const AuthSignInPage = ({ children }) => {
  const isDesktop = useMediaQuery(800);
  return (
    <Background>
      <AuthContainer isDesktop={isDesktop}>
        <AuthSignInForm />
      </AuthContainer>
    </Background>
  );
};

AuthSignInPage.propTypes = {
  children: PropTypes.node,
};

export default AuthSignInPage;
