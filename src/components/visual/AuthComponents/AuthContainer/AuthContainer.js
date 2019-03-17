import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container, LeftContainerBlock, RightContainerBlock } from './AuthContainer.styles';
import StringMatcher from '../../../helpers/StringMatcher';
import ResetLogoWhite from '../../../../img/ResetLogoWhite.png';
import AuthDesktopTitle from '../AuthDesktopTitle/AuthDesktopTitle';

const AuthContainer = ({ isDesktop, children }) => {
  return (
    <Container isDesktop={isDesktop}>
      {isDesktop ? (
        <Fragment>
          <LeftContainerBlock>
            <AuthDesktopTitle
              title={
                <StringMatcher
                  string="R{{e}}set"
                  pattern="{{}}"
                  replacement={<img src={ResetLogoWhite} alt="e" />}
                />
              }
              subtitle={
                <StringMatcher
                  string="A web app for retraining your thoughts {{<br />}} and shaping your mind."
                  pattern="{{}}"
                  replacement={<br />}
                />
              }
            />
          </LeftContainerBlock>
          <RightContainerBlock>{children}</RightContainerBlock>
        </Fragment>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Container>
  );
};

AuthContainer.propTypes = {
  isDesktop: PropTypes.bool,
  children: PropTypes.node,
};

export default AuthContainer;
