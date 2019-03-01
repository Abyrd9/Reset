import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ErrorPopupContainer, ErrorMessage, ExitIcon } from './ErrorPopup.styles';

const ErrorPopup = ({ message, handleClosePopup }) => {
  const targetElement = document.createElement('div');

  let timer = 5000;
  let closeTimer;
  const startCloseTimer = () => {
    closeTimer = setTimeout(() => {
      handleClosePopup();
    }, timer);
  };

  const stopCloseTimer = () => {
    clearTimeout(closeTimer);
  };

  useEffect(() => {
    document.body.appendChild(targetElement);
    startCloseTimer();
    return () => document.body.removeChild(targetElement);
  }, []);

  return ReactDOM.createPortal(
    <ErrorPopupContainer timer={timer / 1000}>
      <ErrorMessage>{message}</ErrorMessage>
      <ExitIcon
        icon="times"
        onClick={() => {
          stopCloseTimer();
          handleClosePopup();
        }}
      />
    </ErrorPopupContainer>,
    targetElement
  );
};

ErrorPopup.propTypes = {
  message: PropTypes.string,
  handleClosePopup: PropTypes.func
};

export default ErrorPopup;
