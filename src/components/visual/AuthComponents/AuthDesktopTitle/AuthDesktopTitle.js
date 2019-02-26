import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Title, Divider, Subtitle } from './AuthDesktopTitle.styles';

const AuthDesktopTitle = ({ title, subtitle }) => {
  return (
    <Fragment>
      <Title>{title}</Title>
      <Divider />
      <Subtitle>{subtitle}</Subtitle>
    </Fragment>
  );
};

AuthDesktopTitle.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node
};

export default AuthDesktopTitle;
