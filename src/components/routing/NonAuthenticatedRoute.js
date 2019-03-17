import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

const NonAuthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/app",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

NonAuthenticatedRoute.propTypes = {

};

export default NonAuthenticatedRoute;