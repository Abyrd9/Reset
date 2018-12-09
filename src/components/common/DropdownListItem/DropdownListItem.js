import React from 'react';
import PropTypes from 'prop-types';
import { DropdownListItemStyled } from './DropdownListItemStyled';

const DropdownListItem = ({ children, onClick }) => {
  return <DropdownListItemStyled onClick={onClick}>{children}</DropdownListItemStyled>;
};

DropdownListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};

export default DropdownListItem;
