import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, LeftContainerBlock, RightContainerBlock } from './AuthContainer.styles';
import StringMatcher from '../../../functional/StringMatcher';
import ResetLogoWhite from '../../../../img/ResetLogoWhite.png';
import AuthDesktopTitle from '../AuthDesktopTitle/AuthDesktopTitle';
import AuthSignUpForm from '../AuthSignUpForm/AuthSignUpForm';
import AuthSignInForm from '../AuthSignInForm/AuthSignInForm';

const AuthContainer = ({ isDesktop, isSignUpPage }) => {
  return (
    <Container isDesktop={isDesktop}>
      {isDesktop ? (
        <Fragment>
          <LeftContainerBlock>
            <AuthDesktopTitle
              title={
                <StringMatcher
                  string="R{{e}}set"
                  pattern="{{}}"
                  replacement={<img src={ResetLogoWhite} alt="e" />}
                />
              }
              subtitle={
                <StringMatcher
                  string="A web app for retraining your thoughts {{<br />}} and shaping your mind."
                  pattern="{{}}"
                  replacement={<br />}
                />
              }
            />
          </LeftContainerBlock>
          <RightContainerBlock>
            {isSignUpPage ? <AuthSignUpForm /> : <AuthSignInForm />}
          </RightContainerBlock>
        </Fragment>
      ) : (
        <Fragment>
          {isSignUpPage ? <AuthSignUpForm /> : <AuthSignInForm />}
        </Fragment>
      )}
    </Container>
  );
};

AuthContainer.propTypes = {
  isDesktop: PropTypes.bool,
  isSignUpPage: PropTypes.bool
};

export default AuthContainer;
