import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthForgotPasswordStyles } from './AuthForgotPasswordStyles';

class AuthForgotPassword extends Component {
  render() {
    return (
      <AuthForgotPasswordStyles>
        <a href="#" onClick={this.props.onClick}>
          I forgot my password.
        </a>
      </AuthForgotPasswordStyles>
    );
  }
}

AuthForgotPassword.propTypes = {
  onClick: PropTypes.func
};

export default AuthForgotPassword;
