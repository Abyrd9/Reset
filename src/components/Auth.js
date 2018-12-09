import React, { Component, Fragment } from 'react';
import produce from 'immer';
import GlobalContainer from './common/GlobalContainer/GlobalContainer';
import Input from './common/Input/Input';
import Button from './common/Button/Button';
import AuthForgotPassword from './common/AuthForgotPassword/AuthForgotPassword';
import AnimationBlock from './common/AnimationBlock/AnimationBlock';
import AuthSocialBlock from './common/AuthSocialBlock/AuthSocialBlock';
import AuthPageSwitcher from './common/AuthPageSwitcher/AuthPageSwitcher';
import AuthLogoHeader from './common/AuthLogoHeader/AuthLogoHeader';
import AuthContext from './contexts/AuthContext';

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

  switchPage = page => {
    this.setState(
      produce(draft => {
        draft.signIn = {
          email: '',
          password: ''
        };
        draft.signUp = {
          email: '',
          password: '',
          confirmPassword: '',
          name: ''
        };
        draft.currentPage = page;
      })
    );
  };

  render() {
    const { signIn, signUp, currentPage } = this.state;
    return (
      <AuthContext>
        {auth => (
          <GlobalContainer isFlex>
            {currentPage === 'signin' && (
              <Fragment>
                <AnimationBlock>
                  <AuthLogoHeader />
                </AnimationBlock>
                <AnimationBlock delay={100}>
                  <Input
                    icon="envelope"
                    type="email"
                    value={signIn.email}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.email = val;
                        })
                      );
                    }}
                    placeholder="Email"
                  />
                  <Input
                    icon="lock"
                    type="password"
                    value={signIn.password}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.password = val;
                        })
                      );
                    }}
                    placeholder="Password"
                  />
                </AnimationBlock>
                <AnimationBlock delay={200}>
                  <Button
                    currentPage={currentPage}
                    onClick={() => auth.handleSignIn(signIn.email, signIn.password)}>
                    Sign In
                  </Button>
                  <AuthForgotPassword />
                </AnimationBlock>
                <AnimationBlock delay={300}>
                  <AuthSocialBlock />
                </AnimationBlock>
                <AnimationBlock delay={400}>
                  <AuthPageSwitcher
                    text="Don't have an account?"
                    buttonText="Sign Up"
                    onClick={() => this.switchPage('signup')}
                  />
                </AnimationBlock>
              </Fragment>
            )}
            {currentPage === 'signup' && (
              <Fragment>
                <AnimationBlock>
                  <AuthLogoHeader />
                </AnimationBlock>
                <AnimationBlock delay={100}>
                  <Input
                    icon="user"
                    type="text"
                    value={signUp.name}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.name = val;
                        })
                      );
                    }}
                    placeholder="Full name"
                  />
                  <Input
                    icon="envelope"
                    type="email"
                    value={signUp.email}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.email = val;
                        })
                      );
                    }}
                    placeholder="Email"
                  />
                  <Input
                    icon="lock"
                    type="password"
                    value={signUp.password}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.password = val;
                        })
                      );
                    }}
                    placeholder="Password"
                  />
                  <Input
                    icon="unlock"
                    type="password"
                    value={signUp.confirmPassword}
                    onChange={e => {
                      const val = e.target.value;
                      this.setState(
                        produce(draft => {
                          draft.signIn.confirmPassword = val;
                        })
                      );
                    }}
                    placeholder="Confirm password"
                  />
                </AnimationBlock>
                <AnimationBlock delay={200}>
                  <Button>Sign Up</Button>
                </AnimationBlock>
                <AnimationBlock delay={300}>
                  <AuthSocialBlock />
                </AnimationBlock>
                <AnimationBlock delay={400}>
                  <AuthPageSwitcher
                    text="Don't have an account?"
                    buttonText="Sign In"
                    onClick={() => this.switchPage('signin')}
                  />
                </AnimationBlock>
              </Fragment>
            )}
          </GlobalContainer>
        )}
      </AuthContext>
    );
  }
}

export default Auth;
