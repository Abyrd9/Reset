import React from 'react';
import PropTypes from 'prop-types';
import { ButtonListStyled } from './ButtonList.styles';
import Button from '../Button/Button';

const ButtonList = ({ cancelText, saveText, onCancel, onSave }) => {
  return (
    <ButtonListStyled>
      <Button onClick={onCancel}>{cancelText}</Button>
      <Button onClick={onSave}>{saveText}</Button>
    </ButtonListStyled>
  );
};

ButtonList.propTypes = {
  cancelText: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  saveText: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onCancel: PropTypes.func,
  onSave: PropTypes.func
};

export default ButtonList;
