import React from 'react';
import PropTypes from 'prop-types';
import { NavMenuTimeListItemStyled, NavCheckIcon } from './NavMenuTimeListItemStyled';

const NavMenuTimeListItem = ({ time, isSelected, onClick }) => {
  return (
    <NavMenuTimeListItemStyled isSelected={isSelected} onClick={onClick}>
      {time} seconds
      {isSelected && <NavCheckIcon icon="check" />}
    </NavMenuTimeListItemStyled>
  );
};

NavMenuTimeListItem.propTypes = {
  time: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavMenuTimeListItem;
