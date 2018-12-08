import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ResetLogo from '../../../img/ResetLogo.png';
import { NavBarStyles, NavBarIcon } from './NavBarStyles';

class Header extends Component {
  render() {
    const { link, handleOpenMenu, children } = this.props;
    return (
      <NavBarStyles>
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
      </NavBarStyles>
    );
  }
}

Header.propTypes = {
  isAdmin: PropTypes.bool,
  handleOpenMenu: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Header;
