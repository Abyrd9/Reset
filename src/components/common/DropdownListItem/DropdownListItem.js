import React from 'react';
import PropTypes from 'prop-types';
import { DropdownListItemStyles } from './DropdownListItemStyles';

const DropdownListItem = ({ children, onClick }) => {
  return <DropdownListItemStyles onClick={onClick}>{children}</DropdownListItemStyles>;
};

DropdownListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};

export default DropdownListItem;
