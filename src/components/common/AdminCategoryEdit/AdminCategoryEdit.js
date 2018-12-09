import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AdminContext } from '../../contexts/AdminContext';
import { AdminCategoryEditStyled, DeleteIcon, Icon } from './AdminCategoryEditStyled';
import Modal from '../Modal/Modal';
import AdminModalContent from '../AdminModalContent/AdminModalContent';

class AdminCategoryEdit extends Component {
  static contextType = AdminContext;
  state = { isDelete: false, isEdit: false, name: this.props.name };

  render() {
    const { categoryId, clearCategoryId } = this.props;
    const { isDelete, isEdit, name } = this.state;
    return (
      <Fragment>
        <AdminCategoryEditStyled>
          <DeleteIcon icon="minus-circle" onClick={() => this.setState({ isDelete: true })} />
          <label>
            <p>Category:</p>
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              disabled={!isEdit}
            />
            {isEdit ? (
              <Icon
                icon={'save'}
                onClick={() => {
                  this.context.handleEditCategory(categoryId, name);
                  this.setState({ isEdit: false });
                }}
              />
            ) : (
              <Icon icon={'edit'} onClick={() => this.setState({ isEdit: true })} />
            )}
          </label>
        </AdminCategoryEditStyled>
        {isDelete && (
          <Modal>
            <AdminModalContent
              title="Delete Modal"
              onCancel={() => this.setState({ isDelete: false })}
              onSave={() => {
                clearCategoryId();
                this.context.handleDeleteCategory(categoryId);
                this.setState({ isDelete: false });
              }}
              isCentered>
              <p>Are you sure you want to delete this?</p>
            </AdminModalContent>
          </Modal>
        )}
      </Fragment>
    );
  }
}

AdminCategoryEdit.propTypes = {
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  clearCategoryId: PropTypes.func
};

export default AdminCategoryEdit;
