import React from 'react';
import PropTypes from 'prop-types';
import { ButtonListStyles } from './ButtonListStyles';
import Button from '../Button/Button';

const ButtonList = ({ cancelText, saveText, onCancel, onSave }) => {
  return (
    <ButtonListStyles>
      <Button onClick={onCancel}>{cancelText}</Button>
      <Button onClick={onSave}>{saveText}</Button>
    </ButtonListStyles>
  );
};

ButtonList.propTypes = {
  cancelText: PropTypes.string,
  saveText: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func
};

export default ButtonList;
