import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../img/Logo.png';
import LogoWhite from '../../img/LogoWhite.png';

const HeaderContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      max-height: 75px;
      padding: 15px 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 50px;
      }
      background-color: ${props.isAdmin
        ? theme.colors.secondary
        : theme.colors.white};
      box-shadow: ${props.isAdmin ? theme.shadow : 'none'};
      z-index: ${theme.zIndex.top};
    `;
  }};
`;

const NavIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      opacity: 1;
      visibility: visible;
      font-size: ${props.icon === 'times' ? '38px' : '32px'};
      color: ${props.isAdmin ? theme.colors.white : theme.colors.primary};
      transition: ${theme.transition('all', 0.2)};
    `;
  }};
`;

class Header extends Component {
  state = {
    menuOpen: false
  };
  render() {
    const { isAdmin } = this.props;

    const ChildrenWithMenuOpenProp = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, { menuOpen: this.state.menuOpen });
      }
    );

    return (
      <HeaderContainer isAdmin={isAdmin}>
        {isAdmin ? (
          <React.Fragment>
            <Link to="/list">
              <NavIcon icon="arrow-left" isAdmin />
            </Link>
            <img src={LogoWhite} alt="logo" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <img src={Logo} alt="logo" />
            {ChildrenWithMenuOpenProp}
            {this.state.menuOpen ? (
              <NavIcon
                onClick={() => this.setState({ menuOpen: false })}
                icon="times"
                menuOpen={this.state.menuOpen}
              />
            ) : (
              <NavIcon
                onClick={() => this.setState({ menuOpen: true })}
                icon="bars"
                menuOpen={this.state.menuOpen}
              />
            )}
          </React.Fragment>
        )}
      </HeaderContainer>
    );
  }
}

Header.propTypes = {};

export default Header;
