import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AnimationBlock from '../AnimationBlock/AnimationBlock';
import { AdminContext } from '../../contexts/AdminContext';
import NavMenuItem from '../NavMenuItem/NavMenuItem';
import NavMenuTimeList from '../NavMenuTimeList/NavMenuTimeList';
import NavMenuTimeListItem from '../NavMenuTimeListItem/NavMenuTimeListItem';
import { NavMenuStyled, NavCloseIcon, NavMenuList } from './NavMenuStyled';

const times = [0, 5, 8, 10, 15, 20, 30, 60];

class Menu extends Component {
  static contextType = AdminContext;
  state = {
    timerMenuOpen: false
  };

  render() {
    const { menuOpen, handleCloseMenu, timer } = this.props;
    return (
      <NavMenuStyled menuOpen={menuOpen}>
        <NavCloseIcon
          icon="times"
          onClick={() => {
            this.setState({ timerMenuOpen: false });
            handleCloseMenu();
          }}
        />
        {menuOpen && (
          <NavMenuList>
            <AnimationBlock delay={100}>
              <NavMenuItem
                onClick={() => this.setState({ timerMenuOpen: !this.state.timerMenuOpen })}
                text="Timer"
                icon="stopwatch"
              />
            </AnimationBlock>
            <NavMenuTimeList timerMenuOpen={this.state.timerMenuOpen}>
              {this.state.timerMenuOpen && (
                <React.Fragment>
                  {times.map((time, i) => (
                    <AnimationBlock delay={i * 100 + 500}>
                      <NavMenuTimeListItem
                        time={time}
                        isSelected={time === timer}
                        onClick={() => {
                          this.context.handleSetTimer(time);
                        }}
                      />
                    </AnimationBlock>
                  ))}
                </React.Fragment>
              )}
            </NavMenuTimeList>
            <AnimationBlock delay={200}>
              <NavMenuItem text="Settings" icon="cog" link="/admin" />
            </AnimationBlock>
            <AnimationBlock delay={300}>
              <NavMenuItem onClick={() => firebase.auth().signOut()} text="Sign Out" icon="user" />
            </AnimationBlock>
          </NavMenuList>
        )}
      </NavMenuStyled>
    );
  }
}

Menu.propTypes = {
  menuOpen: PropTypes.bool,
  handleCloseMenu: PropTypes.func,
  timer: PropTypes.string
};

export default Menu;
