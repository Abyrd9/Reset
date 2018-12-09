import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemCreateStyled, DropdownItemCreateIcon } from './DropdownItemCreateStyled';

const DropdownItemCreate = ({ children, onClick }) => {
  return (
    <DropdownItemCreateStyled onClick={onClick}>
      Create New Category... <DropdownItemCreateIcon icon="plus-circle" />
    </DropdownItemCreateStyled>
  );
};

DropdownItemCreate.propTypes = {
  onClick: PropTypes.func
};

export default DropdownItemCreate;
