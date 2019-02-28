import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundImageContainer } from './Background.styles';

const Background = ({ children }) => {
  return <BackgroundImageContainer>{children}</BackgroundImageContainer>;
};

Background.propTypes = {};

export default Background;
