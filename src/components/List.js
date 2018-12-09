import React, { Component, Fragment } from 'react';
import AdminContextComponent from './contexts/AdminContext';
import TimerListener from './contexts/TimerListener';
import StatementsListener from './contexts/StatementsListener';
import GlobalContainer from './common/GlobalContainer/GlobalContainer';
import NavBar from './common/NavBar/NavBar';
import NavMenu from './common/NavMenu/NavMenu';
import Dropdown from './common/Dropdown/Dropdown';
import DropdownListItem from './common/DropdownListItem/DropdownListItem';
import ListStatement from './common/ListStatement/ListStatement';
import ListButton from './common/ListButton/ListButton';
import CategoriesListener from './contexts/CategoriesListener';

class List extends Component {
  state = {
    menuOpen: false,
    currentIndex: 0,
    currentCategory: { name: '', key: '', statements: [] }
  };

  handleChangeIndex = length => {
    let statementLength = length - 1;
    if (this.state.currentIndex === statementLength) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  render() {
    const { menuOpen, currentCategory, currentIndex } = this.state;
    console.log(this.state);
    return (
      <GlobalContainer isFlex>
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

          <StatementsListener categoryId={currentCategory.categoryId}>
            {statementVal => (
              <Fragment>
                <ListStatement
                  value={
                    !!statementVal.statements[currentIndex] &&
                    statementVal.statements[currentIndex].value
                  }
                />
                <TimerListener>
                  {timerVal => (
                    <ListButton
                      hasStatements={statementVal.statements.length > 0}
                      handleChangeIndex={() =>
                        this.handleChangeIndex(statementVal.statements.length)
                      }
                      time={timerVal.timer}
                    />
                  )}
                </TimerListener>
              </Fragment>
            )}
          </StatementsListener>
        </AdminContextComponent>
      </GlobalContainer>
    );
  }
}

List.propTypes = {};

export default List;
