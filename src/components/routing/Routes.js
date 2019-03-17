import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useStore } from '../../state/store';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';
import AuthenticatedRoute from './AuthenticatedRoute';
import AuthSignInPage from '../pages/AuthSignInPage';
import AuthSignUpPage from '../pages/AuthSignUpPage';

const Routes = ({}) => {
  const { state, actions } = useStore();
  const { isAuthenticated } = state;
  return (
    <div>
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            render={() => (isAuthenticated ? <Redirect to="/app" /> : <Redirect to="/sign-in" />)}
          />
          <NonAuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/sign-in"
            component={AuthSignInPage}
          />
          <NonAuthenticatedRoute
            isAuthenticated={isAuthenticated}
            path="/sign-up"
            component={AuthSignUpPage}
          />
        </React.Fragment>
      </Router>
    </div>
  );
};

Routes.propTypes = {};

export default Routes;
