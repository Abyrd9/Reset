import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavMenuItemStyled, NavIcon } from './NavMenuItemStyled';
import { Link } from 'react-router-dom';

const NavMenuItem = ({ text, icon, link, onClick }) => {
  return (
    <Fragment>
      {link ? (
        <Link to={link}>
          <NavMenuItemStyled onClick={onClick}>
            {text}
            <NavIcon icon={icon} />
          </NavMenuItemStyled>
        </Link>
      ) : (
        <NavMenuItemStyled onClick={onClick}>
          {text}
          <NavIcon icon={icon} />
        </NavMenuItemStyled>
      )}
    </Fragment>
  );
};

NavMenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default NavMenuItem;
