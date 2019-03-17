import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ErrorPopupContainer, ErrorMessage, ExitIcon } from './ErrorPopup.styles';
import { useStore } from '../../../../state/store';

const ErrorPopup = React.memo(() => {
  const {
    state: {
      errorHandling: { errorMessage, errorActive },
    },
    actions: { clearErrorMessage },
  } = useStore();

  // create dom portal container
  const targetElement = document.createElement('div');
  targetElement.id = 'error-message-container';

  let timer;
  const errorTimer = () => {
    timer = setTimeout(() => {
      setTimeout(() => {
        clearErrorMessage();
      }, 500);
    }, 4500);
  };

  const stopTimer = () => {
    clearTimeout(timer);
    clearErrorMessage();
  };

  useEffect(() => {
    if (errorMessage && errorMessage.length > 0) {
      document.body.appendChild(targetElement);
      errorTimer();
    }
    return () => {
      const container = document.getElementById('error-message-container');
      if (!!container) {
        document.body.removeChild(targetElement);
      }
    };
  }, [errorMessage]);

  if (errorMessage && errorMessage.length > 0) {
    return ReactDOM.createPortal(
      <ErrorPopupContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <ExitIcon icon="times" onClick={() => stopTimer()} />
      </ErrorPopupContainer>,
      targetElement
    );
  }
  return null;
});

ErrorPopup.propTypes = {
  message: PropTypes.string,
  handleClosePopup: PropTypes.func,
};

export default ErrorPopup;
