import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthSocialBlockStyled, FacebookButton, GoogleButton } from './AuthSocialBlockStyled';

class AuthSocialBlock extends Component {
  render() {
    const { onFacebookClick, onGoogleClick } = this.props;
    return (
      <AuthSocialBlockStyled>
        <div>
          <span />
          <p>or</p>
          <span />
        </div>
        <FacebookButton onFacebookClick={onFacebookClick}>
          Continue with <h4>Facebook</h4>
        </FacebookButton>
        <GoogleButton onGoogleClick={onGoogleClick}>
          Continue with <h4>Google</h4>
        </GoogleButton>
      </AuthSocialBlockStyled>
    );
  }
}

AuthSocialBlock.propTypes = {
  onFacebookClick: PropTypes.func,
  onGoogleClick: PropTypes.func
};

export default AuthSocialBlock;
