import React from 'react';
import PropTypes from 'prop-types';
import { DividerContainer, DividerLine, DividerText } from './AuthDivider.styles';

const AuthDivider = ({ text }) => {
  return (
    <DividerContainer>
      <DividerLine />
      <DividerText>{text}</DividerText>
      <DividerLine />
    </DividerContainer>
  );
};

AuthDivider.propTypes = {
  text: PropTypes.string
};

export default AuthDivider;
