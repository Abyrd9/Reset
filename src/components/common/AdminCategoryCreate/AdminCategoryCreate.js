import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminCategoryCreateStyled } from './AdminCategoryCreate.styles';
import { AdminContext } from '../../contexts/AdminContext';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ButtonList from '../ButtonList/ButtonList';

class AdminCategoryCreate extends Component {
  static contextType = AdminContext;
  state = {
    name: ''
  };

  componentDidMount() {
    const { name } = this.props;
    if (name) {
      this.setState({ name });
    }
  }

  render() {
    const { onCancel } = this.props;
    const { name } = this.state;
    return (
      <AdminCategoryCreateStyled>
        <Input
          icon="file-signature"
          type="text"
          value={name}
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Category Name..."
        />
        <ButtonList
          cancelText="Cancel"
          saveText="Add Category"
          onCancel={onCancel}
          onSave={() => {
            this.context.handleCreateCategory(name);
            this.setState({ name: '' });
            onCancel();
          }}
        />
      </AdminCategoryCreateStyled>
    );
  }
}

AdminCategoryCreate.propTypes = {
  name: PropTypes.string,
  onCancel: PropTypes.func
};

export default AdminCategoryCreate;
