import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

AuthenticatedRoute.propTypes = {

};

export default AuthenticatedRoute;