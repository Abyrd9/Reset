import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthForgotPasswordStyled } from './AuthForgotPasswordStyled';

class AuthForgotPassword extends Component {
  render() {
    return (
      <AuthForgotPasswordStyled>
        <a href="#" onClick={this.props.onClick}>
          I forgot my password.
        </a>
      </AuthForgotPasswordStyled>
    );
  }
}

AuthForgotPassword.propTypes = {
  onClick: PropTypes.func
};

export default AuthForgotPassword;
