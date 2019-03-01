import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AuthFormTitle from '../AuthFormTitle/AuthFormTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';
import AuthTextWithLink from '../AuthTextWithLink/AuthTextWithLink';

// overmind store
import { useStore } from '../../../../state/store';
import AuthDivider from '../AuthDivider/AuthDivider';
import AuthSocialButton from '../AuthSocialButton/AuthSocialButton';
import ErrorPopup from '../../CommonComponents/ErrorPopup/ErrorPopup';

const AuthSignInForm = ({}) => {
  const { state, actions } = useStore();
  return (
    <Fragment>
      <AuthFormTitle title="Sign in." />
      <AuthInput
        icon="envelope"
        placeholder="Email"
        type="email"
        value={state.signIn.email}
        onChange={e => actions.changeSignInEmail(e.target.value)}
        valueConfirmed={state.emailConfirmed}
      />
      <AuthInput
        icon="lock"
        placeholder="Password"
        type="password"
        value={state.signIn.password}
        onChange={e => actions.changeSignInPassword(e.target.value)}
        valueConfirmed={state.passwordConfirmed}
      />
      <AuthTextWithLink text="Forgot your Password?" linkText="Recover it." topPadding="0px" />
      <AuthButton text="Sign In" onClick={() => actions.handleSignIn()} />
      <AuthDivider text="or" />
      <AuthSocialButton isFacebook>
        <span>
          Continue with <b>Facebook</b>
        </span>
      </AuthSocialButton>
      <AuthSocialButton isGoogle>
        <span>
          Continue with <b>Google</b>
        </span>
      </AuthSocialButton>
      <AuthTextWithLink
        text="Don't have an account?"
        linkText="Sign up"
        onClick={() => actions.toggleIsSignUpPage(true)}
        isCentered
      />
      {state.authErrorMessage && (
        <ErrorPopup
          message={state.authErrorMessage}
          handleClosePopup={() => actions.changeAuthErrorMessage('')}
        />
      )}
    </Fragment>
  );
};

AuthSignInForm.propTypes = {};

export default AuthSignInForm;
