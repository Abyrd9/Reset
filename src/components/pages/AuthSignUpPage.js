import React from 'react';
import PropTypes from 'prop-types';

// components
import Background from '../visual/CommonComponents/Background/Background';
import AuthContainer from '../visual/AuthComponents/AuthContainer/AuthContainer';
import AuthSignUpForm from '../visual/AuthComponents/AuthSignUpForm/AuthSignUpForm';

// custom hooks
import useMediaQuery from '../helpers/useMediaQuery';

const AuthSignUpPage = ({ children }) => {
  const isDesktop = useMediaQuery(800);
  return (
    <Background>
      <AuthContainer isDesktop={isDesktop}>
        <AuthSignUpForm />
      </AuthContainer>
    </Background>
  );
};

AuthSignUpPage.propTypes = {
  children: PropTypes.node,
};

export default AuthSignUpPage;
