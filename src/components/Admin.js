import React, { Component, Fragment } from 'react';
import AdminContextComponent from './contexts/AdminContext';
import NavBar from './common/NavBar/NavBar';
import GlobalContainer from './common/GlobalContainer/GlobalContainer';
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
    activeCategory: '',
    activeStatement: '',
    editCategory: false
  };

  handleSetCurrentStatement = (statementId, clear = false) => {
    console.log(statementId, clear);
    const id = clear ? '' : statementId;
    console.log(id);
    this.setState({ activeStatement: id });
  };

  render() {
    const { editCategory, activeCategory, activeStatement } = this.state;
    return (
      <GlobalContainer isAdmin>
        <NavBar link="/list" isAdmin />
        <AdminContextComponent>
          <CategoryListener categoryId={activeCategory}>
            {categoryVal => {
              const { category } = categoryVal;
              const categoryId = !!category ? category.categoryId : '';
              const name = !!category ? category.name : '';
              return (
                <Fragment>
                  {editCategory ? (
                    <AdminCategoryCreate onCancel={() => this.setState({ editCategory: false })} />
                  ) : (
                    <Dropdown
                      title="Choose your category:"
                      placeholder={'Select Category...'}
                      value={name}>
                      <CategoriesListener>
                        {value => (
                          <Fragment>
                            {value.categories.map(category => (
                              <DropdownListItem
                                onClick={() =>
                                  this.setState({ activeCategory: category.categoryId })
                                }>
                                {category.name}
                              </DropdownListItem>
                            ))}
                            <DropdownItemCreate
                              onClick={() => this.setState({ editCategory: true })}
                            />
                          </Fragment>
                        )}
                      </CategoriesListener>
                    </Dropdown>
                  )}
                  {!!categoryId && (
                    <Fragment>
                      <CategoryListener categoryId={categoryId}>
                        {val =>
                          !!val.category.name && (
                            <AdminCategoryEdit
                              name={val.category.name}
                              categoryId={categoryId}
                              clearCategoryId={() => this.setState({ activeCategory: '' })}
                            />
                          )
                        }
                      </CategoryListener>

                      <StatementsListener categoryId={categoryId}>
                        {val =>
                          val.statements.length > 0 &&
                          val.statements.map(statement => (
                            <AdminStatementItem
                              toggleIsActive={clear =>
                                this.handleSetCurrentStatement(statement.statementId, clear)
                              }
                              isActive={statement.statementId === activeStatement}
                              value={statement.value}
                              categoryId={categoryId}
                              statementId={statement.statementId}>
                              {statement.value}
                            </AdminStatementItem>
                          ))
                        }
                      </StatementsListener>
                    </Fragment>
                  )}
                  <AdminCreateStatement categoryId={categoryId} />
                </Fragment>
              );
            }}
          </CategoryListener>
        </AdminContextComponent>
      </GlobalContainer>
    );
  }
}

Admin.propTypes = {};

export default Admin;
