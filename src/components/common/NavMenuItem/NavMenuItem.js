import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavMenuItemStyles, NavIcon } from './NavMenuItemStyles';
import { Link } from 'react-router-dom';

const NavMenuItem = ({ text, icon, link, onClick }) => {
  return (
    <Fragment>
      {link ? (
        <Link to={link}>
          <NavMenuItemStyles onClick={onClick}>
            {text}
            <NavIcon icon={icon} />
          </NavMenuItemStyles>
        </Link>
      ) : (
        <NavMenuItemStyles onClick={onClick}>
          {text}
          <NavIcon icon={icon} />
        </NavMenuItemStyles>
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
