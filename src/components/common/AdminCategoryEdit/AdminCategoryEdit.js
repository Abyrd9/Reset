import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminCategoryEditStyles, DeleteIcon, Icon } from './AdminCategoryEditStyles';

class AdminCategoryEdit extends Component {
  state = { isEditable: false, name: this.props.name };

  render() {
    const { isEditable, name } = this.state;
    return (
      <AdminCategoryEditStyles>
        <DeleteIcon icon="minus-circle" />
        <label>
          <p>Category:</p>
          <input value={name} onChange={e => this.setState({ name: e.target.value })} />
          <Icon icon={isEditable ? 'save' : 'edit'} />
        </label>
      </AdminCategoryEditStyles>
    );
  }
}

AdminCategoryEdit.propTypes = {
  name: PropTypes.string.isRequired
};

export default AdminCategoryEdit;
