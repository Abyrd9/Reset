import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AdminContext } from '../../contexts/AdminContext';
import { AdminStatementItemStyled } from './AdminStatementItemStyled';
import AdminStatementToolList from '../AdminStatementToolList/AdminStatementToolList';
import Modal from '../Modal/Modal';
import AdminModalContent from '../AdminModalContent/AdminModalContent';
import AutoResizingTextArea from '../AutoResizingTextArea/AutoResizingTextArea';

class AdminStatementItem extends Component {
  static contextType = AdminContext;
  state = {
    isDelete: false,
    isEdit: false,
    value: ''
  };

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState({ value });
    }
  }

  render() {
    const { toggleIsActive, isActive, categoryId, statementId } = this.props;
    const { isDelete, isEdit, value } = this.state;
    const toggleClear = isActive ? true : false;
    return (
      <Fragment>
        <AdminStatementItemStyled onClick={() => toggleIsActive(toggleClear)}>
          {isActive && (
            <AdminStatementToolList
              onDeleteClick={e => {
                e.stopPropagation();
                this.setState({ isDelete: true, isEdit: false });
                toggleIsActive(toggleClear);
              }}
              onEditClick={e => {
                e.stopPropagation();
                this.setState({ isDelete: false, isEdit: true });
                toggleIsActive(toggleClear);
              }}
            />
          )}
          {this.props.children}
        </AdminStatementItemStyled>
        {isDelete && (
          <Modal>
            <AdminModalContent
              title="Delete Modal"
              onCancel={() => this.setState({ isDelete: false })}
              onSave={() => {
                this.context.handleDeleteStatement(categoryId, statementId);
                this.setState({ isDelete: false });
              }}
              isCentered>
              <p>Are you sure you want to delete this?</p>
            </AdminModalContent>
          </Modal>
        )}
        {isEdit && (
          <Modal>
            <AdminModalContent
              title="Edit Content:"
              onCancel={() => this.setState({ isEdit: false })}
              onSave={() => {
                this.context.handleEditStatement(categoryId, statementId, value);
                this.setState({ isEdit: false });
              }}>
              <AutoResizingTextArea
                value={value}
                onChange={e => this.setState({ value: e.target.value })}
                defaultHeight={58}
              />
            </AdminModalContent>
          </Modal>
        )}
      </Fragment>
    );
  }
}

AdminStatementItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  toggleIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  value: PropTypes.string
};

export default AdminStatementItem;
