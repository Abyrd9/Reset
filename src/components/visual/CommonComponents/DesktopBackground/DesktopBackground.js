import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundImageContainer } from './DesktopBackground.styles';

const DesktopBackground = ({ children }) => {
  return <BackgroundImageContainer>{children}</BackgroundImageContainer>;
};

DesktopBackground.propTypes = {};

export default DesktopBackground;
