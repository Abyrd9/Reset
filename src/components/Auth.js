import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './common/Container';
import AuthInput, { AuthInputContainer } from './common/Auth/AuthInput';
import AuthCTA from './common/Auth/AuthCTA';
import BlockAnimation from './common/BlockAnimation';
import AuthSocial from './common/Auth/AuthSocial';
import AuthPageSwitch from './common/Auth/AuthPageSwitch';
import AuthLogo from './common/Auth/AuthLogo';
import AuthContext from './common/Contexts/AuthContext';

class Auth extends Component {
  state = {
    signIn: {
      email: '',
      password: ''
    },
    signUp: {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    },
    isConfirmed: false,
    currentPage: 'signin'
  };

  render() {
    return (
      <AuthContext>
        {auth => (
          <Container isAuth isFlex>
            {this.state.currentPage === 'signin' && (
              <React.Fragment>
                <BlockAnimation>
                  <AuthLogo />
                </BlockAnimation>
                <BlockAnimation delay={100}>
                  <AuthInputContainer>
                    <AuthInput
                      icon="envelope"
                      type="email"
                      value={this.state.signIn.email}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signIn: {
                            ...this.state.signIn,
                            email: e.target.value
                          }
                        })
                      }
                      placeholder="Email"
                    />
                    <AuthInput
                      icon="lock"
                      type="password"
                      value={this.state.signIn.password}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signIn: {
                            ...this.state.signIn,
                            password: e.target.value
                          }
                        })
                      }
                      placeholder="Password"
                    />
                  </AuthInputContainer>
                </BlockAnimation>
                <BlockAnimation delay={200}>
                  <AuthCTA
                    currentPage={this.state.currentPage}
                    onClick={() =>
                      auth.handleSignIn(
                        this.state.signIn.email,
                        this.state.signIn.password
                      )
                    }>
                    Sign In
                  </AuthCTA>
                </BlockAnimation>
                <BlockAnimation delay={300}>
                  <AuthSocial />
                </BlockAnimation>
                <BlockAnimation delay={400}>
                  <AuthPageSwitch
                    text="Don't have an account?"
                    buttonText="Sign Up"
                    onClick={() => this.setState({ currentPage: 'signup' })}
                  />
                </BlockAnimation>
              </React.Fragment>
            )}
            {this.state.currentPage === 'signup' && (
              <React.Fragment>
                <BlockAnimation>
                  <AuthLogo />
                </BlockAnimation>
                <BlockAnimation delay={100}>
                  <AuthInputContainer>
                    <AuthInput
                      icon="user"
                      type="text"
                      value={this.state.signUp.name}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signUp: { ...this.state.signUp, name: e.target.value }
                        })
                      }
                      placeholder="Full name"
                    />
                    <AuthInput
                      icon="envelope"
                      type="email"
                      value={this.state.signUp.email}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signUp: {
                            ...this.state.signUp,
                            email: e.target.value
                          }
                        })
                      }
                      placeholder="Email"
                    />
                    <AuthInput
                      icon="lock"
                      type="password"
                      value={this.state.signUp.password}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signUp: {
                            ...this.state.signUp,
                            password: e.target.value
                          }
                        })
                      }
                      placeholder="Password"
                    />
                    <AuthInput
                      icon="unlock"
                      type="password"
                      value={this.state.signUp.confirmPassword}
                      onChange={e =>
                        this.setState({
                          ...this.state,
                          signUp: {
                            ...this.state.signUp,
                            confirmPassword: e.target.value
                          }
                        })
                      }
                      placeholder="Confirm password"
                    />
                  </AuthInputContainer>
                </BlockAnimation>
                <BlockAnimation delay={200}>
                  <AuthCTA currentPage={this.state.currentPage}>
                    Sign Up
                  </AuthCTA>
                </BlockAnimation>
                <BlockAnimation delay={300}>
                  <AuthSocial />
                </BlockAnimation>
                <BlockAnimation delay={400}>
                  <AuthPageSwitch
                    text="Don't have an account?"
                    buttonText="Sign In"
                    onClick={() =>
                      this.setState({
                        signIn: {
                          email: '',
                          password: ''
                        },
                        signUp: {
                          email: '',
                          password: '',
                          confirmPassword: '',
                          name: ''
                        },
                        currentPage: 'signin'
                      })
                    }
                  />
                </BlockAnimation>
              </React.Fragment>
            )}
          </Container>
        )}
      </AuthContext>
    );
  }
}

Auth.propTypes = {};

export default Auth;
