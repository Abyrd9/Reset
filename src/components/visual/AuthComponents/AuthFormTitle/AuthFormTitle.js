import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Divider } from './AuthFormTitle.styles';

const AuthFormTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Divider />
    </Container>
  );
};

AuthFormTitle.propTypes = {
  title: PropTypes.string
};

export default AuthFormTitle;
