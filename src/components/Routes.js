import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminContextComponent from './common/Contexts/AdminContext';
import Loading from './common/Loading';
import Auth from './Auth';
import ResetList from './ResetList';
import Admin from './Admin';
import AuthContext from './common/Contexts/AuthContext';

const AuthenticatedRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
      )
    }
  />
);

const NonAuthenticatedRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Redirect to={{ pathname: '/list', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

class Routes extends Component {
  render() {
    return (
      <AuthContext>
        {auth => {
          return (
            <React.Fragment>
              {auth.isLoading ? (
                <Loading />
              ) : (
                <Router>
                  <React.Fragment>
                    <Route
                      exact
                      path="/"
                      render={() =>
                        auth.isAuthenticated ? (
                          <Redirect to="/list" />
                        ) : (
                          <Redirect to="/auth" />
                        )
                      }
                    />
                    <NonAuthenticatedRoute
                      isAuthenticated={auth.isAuthenticated}
                      component={Auth}
                      path="/auth"
                    />
                    <AuthenticatedRoute
                      isAuthenticated={auth.isAuthenticated}
                      component={ResetList}
                      path="/list"
                    />
                    <AuthenticatedRoute
                      isAuthenticated={auth.isAuthenticated}
                      component={Admin}
                      path="/admin"
                    />
                    <span id="modal" />
                  </React.Fragment>
                </Router>
              )}
            </React.Fragment>
          );
        }}
      </AuthContext>
    );
  }
}

Routes.propTypes = {};

export default Routes;
