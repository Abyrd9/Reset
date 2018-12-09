import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ResetLogo from '../../../img/ResetLogo.png';
import { NavBarStyled, NavBarIcon } from './NavBarStyled';

class Header extends Component {
  render() {
    const { link, handleOpenMenu, isAdmin, children } = this.props;
    return (
      <NavBarStyled isAdmin={isAdmin}>
        {link ? (
          <Fragment>
            <Link to={link}>
              <NavBarIcon icon="arrow-left" />
            </Link>
            <img src={ResetLogo} alt="logo" />
          </Fragment>
        ) : (
          <Fragment>
            <img src={ResetLogo} alt="logo" />
            <NavBarIcon onClick={handleOpenMenu} icon="bars" />
          </Fragment>
        )}
        {children}
      </NavBarStyled>
    );
  }
}

Header.propTypes = {
  isAdmin: PropTypes.bool,
  handleOpenMenu: PropTypes.func,
  isAdmin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Header;
