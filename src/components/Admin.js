import React, { Component, Fragment } from 'react';
import AdminContextComponent from './contexts/AdminContext';
import NavBar from './common/NavBar/NavBar';
import Container from './common/Container';
import CategoriesListener from './contexts/CategoriesListener';
import CategoryListener from './contexts/CategoryListener';
import StatementsListener from './contexts/StatementsListener';
import Dropdown from './common/Dropdown/Dropdown';
import DropdownListItem from './common/DropdownListItem/DropdownListItem';
import DropdownItemCreate from './common/DropdownItemCreate/DropdownItemCreate';
import AdminCategoryCreate from './common/AdminCategoryCreate/AdminCategoryCreate';
import AdminCategoryEdit from './common/AdminCategoryEdit/AdminCategoryEdit';
import AdminCreateStatement from './common/AdminCreateStatement/AdminCreateStatement';

import AdminStatementList from './common/AdminStatementList/AdminStatementList';
import AdminStatementItem from './common/AdminStatementItem/AdminStatementItem';

class Admin extends Component {
  state = {
    currentCategory: {
      name: '',
      categoryId: '',
      statements: []
    },
    activeStatement: '',
    editCategory: false
  };

  handleSetCurrentCategory = category => {
    this.setState({
      currentCategory: {
        name: category.name,
        categoryId: category.key,
        statements: !!category.statements ? Object.values(category.statements) : []
      }
    });
  };

  handleSetCurrentStatement = (statementId, clear = false) => {
    console.log(statementId, clear);
    const id = clear ? '' : statementId;
    console.log(id);
    this.setState({ activeStatement: id });
  };

  render() {
    const { editCategory, currentCategory, activeStatement } = this.state;
    return (
      <Container>
        <NavBar link="/list" />
        <AdminContextComponent>
          {editCategory ? (
            <AdminCategoryCreate onCancel={() => this.setState({ editCategory: false })} />
          ) : (
            <Dropdown
              title="Choose your category:"
              placeholder={'Select Category...'}
              value={this.state.currentCategory.name}>
              <CategoriesListener>
                {value => (
                  <Fragment>
                    {value.categories.map(category => (
                      <DropdownListItem
                        onClick={() => this.setState({ currentCategory: category })}>
                        {category.name}
                      </DropdownListItem>
                    ))}
                    <DropdownItemCreate onClick={() => this.setState({ editCategory: true })} />
                  </Fragment>
                )}
              </CategoriesListener>
            </Dropdown>
          )}
          {!!currentCategory.categoryId && (
            <Fragment>
              <CategoryListener categoryId={currentCategory.categoryId}>
                {val => !!val.category.name && <AdminCategoryEdit name={val.category.name} />}
              </CategoryListener>

              <StatementsListener categoryId={currentCategory.categoryId}>
                {val =>
                  val.statements.length > 0 &&
                  val.statements.map(statement => (
                    <AdminStatementItem
                      toggleIsActive={clear =>
                        this.handleSetCurrentStatement(statement.statementId, clear)
                      }
                      isActive={statement.statementId === activeStatement}>
                      {statement.value}
                    </AdminStatementItem>
                  ))
                }
              </StatementsListener>
            </Fragment>
          )}
          <AdminCreateStatement categoryId={currentCategory.categoryId} />
        </AdminContextComponent>
      </Container>
    );
  }
}

Admin.propTypes = {};

export default Admin;
