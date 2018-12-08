import React from 'react';
import PropTypes from 'prop-types';
import { NavMenuTimeListItemStyles, NavCheckIcon } from './NavMenuTimeListItemStyles';

const NavMenuTimeListItem = ({ time, isSelected, onClick }) => {
  return (
    <NavMenuTimeListItemStyles isSelected={isSelected} onClick={onClick}>
      {time} seconds
      {isSelected && <NavCheckIcon icon="check" />}
    </NavMenuTimeListItemStyles>
  );
};

NavMenuTimeListItem.propTypes = {
  time: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavMenuTimeListItem;
