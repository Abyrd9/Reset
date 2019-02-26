import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AuthFormTitle from '../AuthFormTitle/AuthFormTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';

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
        value={state.name}
        onChange={e => actions.changeName(e.target.value)}
        valueConfirmed={state.nameConfirmed}
        valueErrorMessage="Please provide your full name."
      />
      <AuthInput
        icon="envelope"
        placeholder="Email"
        type="email"
        value={state.email}
        onChange={e => actions.changeEmail(e.target.value)}
        valueConfirmed={state.emailConfirmed}
        valueErrorMessage="Please provide a valid email address."
      />
      <AuthInput
        icon="lock"
        placeholder="Password"
        type="password"
        value={state.password}
        onChange={e => actions.changePassword(e.target.value)}
        valueConfirmed={state.passwordConfirmed}
        valueErrorMessage="At least 6 characters with 1 uppercase and 1 numeric character."
      />
      <AuthInput
        icon="unlock"
        placeholder="Confirm Password"
        type="password"
        value={state.confirmPassword}
        onChange={e => actions.changeConfirmPassword(e.target.value)}
        valueConfirmed={state.confirmPasswordMatch}
        valueErrorMessage="Please confirm your password."
      />
      <AuthButton text="Sign Up" onClick={() => null} />
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
    </Fragment>
  );
};

AuthSignUpForm.propTypes = {};

export default AuthSignUpForm;
