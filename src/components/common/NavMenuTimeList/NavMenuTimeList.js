import React from 'react';
import PropTypes from 'prop-types';
import { NavMenuTimeListStyled } from './NavMenuTimeList.styles';

const NavMenuTimeList = ({ children, timerMenuOpen }) => {
  return <NavMenuTimeListStyled timerMenuOpen={timerMenuOpen}>{children}</NavMenuTimeListStyled>;
};

NavMenuTimeList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  timerMenuOpen: PropTypes.bool
};

export default NavMenuTimeList;
