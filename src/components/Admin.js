import React, { Component, Fragment } from 'react';
import AdminContextComponent, { AdminContext } from './contexts/AdminContext';
import NavBar from './common/NavBar/NavBar';
import Container from './common/Container';
import CategoriesListener from './contexts/CategoriesListener';
import Dropdown from './common/Dropdown/Dropdown';
import DropdownListItem from './common/DropdownListItem/DropdownListItem';
import DropdownItemCreate from './common/DropdownItemCreate/DropdownItemCreate';
import AdminCategoryCreate from './common/AdminCategoryEdit/AdminCategoryCreate';
import Category from './common/Admin/Category';
import CreateStatement from './common/Admin/CreateStatement';
import StatementList from './common/Admin/StatementList';
import CategoryEdit from './common/Admin/CategoryEdit';

class Admin extends Component {
  state = {
    currentCategory: {
      name: '',
      categoryId: '',
      statements: []
    },
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

  render() {
    const { editCategory } = this.state;
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

          <CategoryEdit
            categoryId={this.state.currentCategory.categoryId}
            categoryName={this.state.currentCategory.name}
          />
          <StatementList categoryId={this.state.currentCategory.categoryId} />
          <CreateStatement category={this.state.currentCategory} />
        </AdminContextComponent>
      </Container>
    );
  }
}

Admin.propTypes = {};

export default Admin;
