import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlockAnimation from './BlockAnimation';
import { AdminContext } from './Contexts/AdminContext';

const times = [0, 5, 8, 10, 15, 20, 30, 60];

const MenuContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      height: 100vh;
      width: 100%;
      overflow: scroll;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${theme.colors.white};
      padding-top: 60px;
      /* transition */
      visibility: ${props.menuOpen ? 'visible' : 'hidden'};
      opacity: ${props.menuOpen ? '1' : '0'};
      transition: ${props.menuOpen
        ? `visibility 0s linear, opacity 0.2s ${theme.ease}`
        : `opacity 0.2s ${theme.ease}, visibility 0s linear 0.2s`};
    `;
  }}
`;

const CloseIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      right: 20px;
      top: 18px;
      font-size: 34px;
      color: ${theme.colors.primary};
    `;
  }}
`;

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.blackSecondary};
      height: 20px;
      margin-left: 10px;
    `;
  }};
`;

const CheckIcon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      position: absolute;
      right: 20px;
    `;
  }};
`;

const MenuItemList = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
			div {
				&:first-of-type {
					li {
						border-top: 1px solid ${theme.colors.gray};
					}
				}
			}
			a {
				color: ${theme.colors.black};
			}
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 15px 0px;
        border-bottom: 1px solid ${theme.colors.gray};
        ${theme.font(18, 600)}
				color: ${theme.colors.black};
      }
    `;
  }}
`;

const TimeItemList = styled.ul`
  ${props => {
    const { theme } = props;
    return css`
      max-height: 0px;
      ${props.timerMenuOpen && 'max-height: 405px;'}
      overflow: hidden;
      transition: ${theme.transition('max-height', 0.5)};
    `;
  }}
`;

const TimeItemListItem = styled.li`
  ${props => {
    const { theme } = props;
    return css`
      && {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 15px 0px;
        border-bottom: 1px solid ${theme.colors.gray};
        ${theme.font(16, 600)};
        color: ${props.isSelected ? theme.colors.white : theme.colors.black};
        background-color: ${props.isSelected
          ? theme.colors.primary
          : 'transparent'};
      }
    `;
  }}
`;

class Menu extends Component {
  static contextType = AdminContext;
  state = {
    timerMenuOpen: false
  };

  setTimerMenuOpen = val => this.setState({ timerMenuOpen: val });

  render() {
    const { menuOpen, setMenuOpen } = this.props;
    return (
      <MenuContainer menuOpen={menuOpen}>
        <CloseIcon
          icon="times"
          onClick={() => {
            this.setState({ timerMenuOpen: false });
            setMenuOpen(false);
          }}
        />
        {menuOpen && (
          <MenuItemList>
            <BlockAnimation delay={100}>
              <li
                onClick={() =>
                  this.setState({ timerMenuOpen: !this.state.timerMenuOpen })
                }>
                Timer <Icon icon="stopwatch" />
              </li>
            </BlockAnimation>
            <TimeItemList timerMenuOpen={this.state.timerMenuOpen}>
              {this.state.timerMenuOpen && (
                <React.Fragment>
                  {times.map((time, i) => (
                    <BlockAnimation delay={i * 100 + 500}>
                      <TimeItemListItem
                        isSelected={time === this.props.timer}
                        onClick={() => {
                          this.context.handleSetTimer(time);
                        }}>
                        {time === this.props.timer && (
                          <CheckIcon icon="check" />
                        )}{' '}
                        {time} seconds
                      </TimeItemListItem>
                    </BlockAnimation>
                  ))}
                </React.Fragment>
              )}
            </TimeItemList>
            <BlockAnimation delay={200}>
              <Link to="/admin">
                <li>
                  Settings
                  <Icon icon="cog" />
                </li>
              </Link>
            </BlockAnimation>
            <BlockAnimation delay={300}>
              <li onClick={() => firebase.auth().signOut()}>
                Sign Out
                <Icon icon="user" />
              </li>
            </BlockAnimation>
          </MenuItemList>
        )}
      </MenuContainer>
    );
  }
}

Menu.propTypes = {};

export default Menu;
