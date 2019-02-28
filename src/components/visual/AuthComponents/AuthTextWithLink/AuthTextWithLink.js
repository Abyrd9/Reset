import React from 'react';
import PropTypes from 'prop-types';
import { TogglePageLink } from './AuthTextWithLink.styles';

const AuthTextWithLink = ({ text, linkText, onClick, isCentered, topPadding }) => {
  return (
    <TogglePageLink isCentered={isCentered} topPadding={topPadding}>
      {text} <span onClick={onClick}>{linkText}</span>
    </TogglePageLink>
  );
};

AuthTextWithLink.propTypes = {
  text: PropTypes.string,
  linkText: PropTypes.string,
  onClick: PropTypes.func,
  isCentered: PropTypes.bool,
  topPadding: PropTypes.string,
};

export default AuthTextWithLink;
