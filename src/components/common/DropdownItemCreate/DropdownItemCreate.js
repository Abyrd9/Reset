import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemCreateStyles, DropdownItemCreateIcon } from './DropdownItemCreateStyles';

const DropdownItemCreate = ({ children, onClick }) => {
  return (
    <DropdownItemCreateStyles onClick={onClick}>
      Create New Category... <DropdownItemCreateIcon icon="plus-circle" />
    </DropdownItemCreateStyles>
  );
};

DropdownItemCreate.propTypes = {
  onClick: PropTypes.func
};

export default DropdownItemCreate;
