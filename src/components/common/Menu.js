import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlockAnimation from './BlockAnimation';
import { AdminContext } from './Contexts/AdminContext';

const MenuList = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      right: 11px;
      top: calc(100% - 15px);
    `;
  }};
`;

const MenuItemStyled = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      margin: 10px 0px;
      position: relative;
      button {
        position: absolute;
        min-width: 100px;
        padding: 8px 10px;
        background-color: ${theme.colors.white};
        box-shadow: ${theme.shadow};
        right: calc(100% + 5px);
        top: -2px;
        /* Transition */
        opacity: ${props.isOpen ? '1' : '0'};
        visibility: ${props.isOpen ? 'visible' : 'hidden'};
        transform: ${props.isOpen ? 'translateX(0)' : 'translateX(10px)'};
        transition: ${props.isOpen
          ? `visibility 0s linear, opacity .2s ${theme.ease}, transform .2s ${
              theme.ease
            }`
          : `opacity .2s ${theme.ease}, transform .2s ${
              theme.ease
            }, visibility 0s linear .2s`};
      }
      ul {
        position: absolute;
        min-width: 100px;
        background-color: ${theme.colors.white};
        box-shadow: ${theme.shadow};
        right: calc(100% + 5px);
        top: -2px;
        margin: 0;
        top: 0;
        /* Transition */
        opacity: ${props.isOpen ? '1' : '0'};
        visibility: ${props.isOpen ? 'visible' : 'hidden'};
        transform: ${props.isOpen ? 'translateX(0)' : 'translateX(10px)'};
        transition: ${props.isOpen
          ? `visibility 0s linear, opacity .2s ${theme.ease}, transform .2s ${
              theme.ease
            }`
          : `opacity .2s ${theme.ease}, transform .2s ${
              theme.ease
            }, visibility 0s linear .2s`};
        li {
          &:nth-child(even) {
            background-color: ${theme.colors.graySecondary};
          }
        }
        button {
          visibility: visible;
          opacity: 1;
          transform: translateX(0);
          background-color: transparent;
          position: relative;
          box-shadow: none;
          right: 0;
        }
      }
    `;
  }};
`;

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      font-size: 26px;
    `;
  }};
`;

class MenuTimeItem extends Component {
  render() {
    return (
      <MenuItemStyled isOpen={this.props.isOpen}>
        <Icon onClick={this.props.onIconClick} icon={this.props.icon} />
        <ul>
          <li>
            <button onClick={() => this.props.returnTime(0)}>0 seconds</button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(5)}>5 seconds</button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(8)}>8 seconds</button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(10)}>
              10 seconds
            </button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(15)}>
              15 seconds
            </button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(20)}>
              20 seconds
            </button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(30)}>
              30 seconds
            </button>
          </li>
          <li>
            <button onClick={() => this.props.returnTime(60)}>
              60 seconds
            </button>
          </li>
        </ul>
      </MenuItemStyled>
    );
  }
}

class MenuItem extends Component {
  render() {
    return (
      <MenuItemStyled isOpen={this.props.isOpen}>
        <Icon onClick={this.props.onIconClick} icon={this.props.icon} />
        {this.props.children}
      </MenuItemStyled>
    );
  }
}

class Menu extends Component {
  static contextType = AdminContext;
  state = {
    stopwatchOpen: false,
    settingsOpen: false,
    userOpen: false
  };
  render() {
    const { stopwatchOpen, settingsOpen, userOpen } = this.state;
    const { menuOpen } = this.props;
    return (
      <MenuList menuOpen={menuOpen}>
        {menuOpen && (
          <React.Fragment>
            <BlockAnimation>
              <MenuTimeItem
                onIconClick={() =>
                  this.setState({
                    stopwatchOpen: !stopwatchOpen,
                    settingsOpen: false,
                    userOpen: false
                  })
                }
                isOpen={stopwatchOpen}
                icon="stopwatch"
                returnTime={val => this.context.handleSetTimer({ timer: val })}
              />
            </BlockAnimation>
            <BlockAnimation delay={100}>
              <MenuItem
                onIconClick={() =>
                  this.setState({
                    stopwatchOpen: false,
                    settingsOpen: !settingsOpen,
                    userOpen: false
                  })
                }
                isOpen={settingsOpen}
                icon="cog">
                <button>
                  <Link to="/admin">Settings</Link>
                </button>
              </MenuItem>
            </BlockAnimation>
            <BlockAnimation delay={200}>
              <MenuItem
                onIconClick={() =>
                  this.setState({
                    stopwatchOpen: false,
                    settingsOpen: false,
                    userOpen: !userOpen
                  })
                }
                isOpen={userOpen}
                icon="user">
                <button onClick={() => firebase.auth().signOut()}>
                  Sign Out
                </button>
              </MenuItem>
            </BlockAnimation>
          </React.Fragment>
        )}
      </MenuList>
    );
  }
}

Menu.propTypes = {};

export default Menu;
