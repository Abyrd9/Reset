import React from 'react';
import PropTypes from 'prop-types';
import { NavMenuTimeListStyles } from './NavMenuTimeListStyles';

const NavMenuTimeList = ({ children, timerMenuOpen }) => {
  return <NavMenuTimeListStyles timerMenuOpen={timerMenuOpen}>{children}</NavMenuTimeListStyles>;
};

NavMenuTimeList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  timerMenuOpen: PropTypes.bool
};

export default NavMenuTimeList;
