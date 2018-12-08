import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AdminContextComponent from './contexts/AdminContext';
import TimerListener from './contexts/TimerListener';
import Container from './common/Container';
import NavBar from './common/NavBar/NavBar';
import NavMenu from './common/NavMenu/NavMenu';
import ListButton from './common/List/ListButton';
import Dropdown from './common/Dropdown/Dropdown';
import DropdownListItem from './common/DropdownListItem/DropdownListItem';
import Statement from './common/List/Statement';
import Loading from './common/Loading';
import CategoriesListener from './contexts/CategoriesListener';

class List extends Component {
  state = {
    menuOpen: false,
    dataLoading: false,
    currentCategory: { name: '', key: '', statements: [] },
    currentIndex: 0
  };

  handleChangeIndex = () => {
    const {
      currentCategory: { statements }
    } = this.state;
    const statementsArray = !!statements && Object.values(statements);
    let statementLength = statementsArray.length - 1;
    if (this.state.currentIndex === statementLength) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  render() {
    const {
      menuOpen,
      currentCategory: { statements },
      currentIndex,
      dataLoading
    } = this.state;
    const hasStatements = !!statements && Object.values(statements).length > 0;
    const statementsArray = !!statements ? Object.values(statements) : [];
    return (
      <Container isFlex>
        <AdminContextComponent>
          {/* Nav Bar */}
          <NavBar handleOpenMenu={() => this.setState({ menuOpen: true })}>
            <TimerListener>
              {value => (
                <NavMenu
                  menuOpen={menuOpen}
                  handleCloseMenu={() => this.setState({ menuOpen: false })}
                  timer={value.timer}
                />
              )}
            </TimerListener>
          </NavBar>

          <Dropdown
            title="Choose your category:"
            placeholder={'Choose A Category...'}
            value={this.state.currentCategory.name}>
            <CategoriesListener>
              {value => (
                <Fragment>
                  {value.categories.length > 0 ? (
                    value.categories.map(category => (
                      <DropdownListItem
                        onClick={() => this.setState({ currentCategory: category })}>
                        {category.name}
                      </DropdownListItem>
                    ))
                  ) : (
                    <DropdownListItem>No categories yet...</DropdownListItem>
                  )}
                </Fragment>
              )}
            </CategoriesListener>
          </Dropdown>

          <Statement
            value={!!statementsArray[currentIndex] && statementsArray[currentIndex].value}
          />

          <TimerListener>
            {value => (
              <ListButton
                hasStatements={hasStatements}
                handleChangeIndex={() => this.handleChangeIndex()}
                timer={value.timer}
              />
            )}
          </TimerListener>
        </AdminContextComponent>
      </Container>
    );
  }
}

List.propTypes = {};

export default List;
