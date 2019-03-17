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

const AuthSignUpForm = ({}) => {
  const { state, actions } = useStore();
  return (
    <Fragment>
      <AuthFormTitle title="Sign up." />
      <AuthInput
        icon="user"
        placeholder="Name"
        type="text"
        value={state.signUp.name}
        onChange={e => actions.changeSignUpName(e.target.value)}
        valueConfirmed={state.signUp.nameConfirmed}
        valueErrorMessage="Please provide your full name."
      />
      <AuthInput
        icon="envelope"
        placeholder="Email"
        type="email"
        value={state.signUp.email}
        onChange={e => actions.changeSignUpEmail(e.target.value)}
        valueConfirmed={state.signUp.emailConfirmed}
        valueErrorMessage="Please provide a valid email address."
      />
      <AuthInput
        icon="lock"
        placeholder="Password"
        type="password"
        value={state.signUp.password}
        onChange={e => actions.changeSignUpPassword(e.target.value)}
        valueConfirmed={state.signUp.passwordConfirmed}
        valueErrorMessage="At least 6 characters with 1 uppercase and 1 numeric character."
      />
      <AuthInput
        icon="unlock"
        placeholder="Confirm Password"
        type="password"
        value={state.signUp.confirmPassword}
        onChange={e => actions.changeSignUpConfirmPassword(e.target.value)}
        valueConfirmed={state.signUp.confirmPasswordMatch}
        valueErrorMessage="Please confirm your password."
      />
      <AuthButton text="Sign Up" onClick={() => actions.handleSignUp()} />
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
        text="Already have an account?"
        linkText="Sign in"
        onClick={() => actions.toggleIsSignUpPage(false)}
        isCentered
      />
    </Fragment>
  );
};

AuthSignUpForm.propTypes = {};

export default AuthSignUpForm;
