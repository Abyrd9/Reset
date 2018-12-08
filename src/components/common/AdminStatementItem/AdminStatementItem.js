import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AdminStatementItemStyles } from './AdminStatementItemStyles';
import AdminStatementToolList from '../AdminStatementToolList/AdminStatementToolList';
import Modal from '../Modal/Modal';

class AdminStatementItem extends Component {
  state = {
    isDelete: false,
    isEdit: false
  };
  render() {
    const { toggleIsActive, isActive } = this.props;
    const { isDelete, isEdit } = this.state;
    return (
      <Fragment>
        <AdminStatementItemStyles onClick={() => toggleIsActive()}>
          {isActive && (
            <AdminStatementToolList
              onDeleteClick={e => {
                e.stopPropagation();
                this.setState({ isDelete: true, isEdit: false });
                toggleIsActive(true);
              }}
              onEditClick={e => {
                e.stopPropagation();
                this.setState({ isDelete: false, isEdit: true });
                toggleIsActive(true);
              }}
            />
          )}
          {this.props.children}
        </AdminStatementItemStyles>
        {isDelete && (
          <Modal>
            <button onClick={() => this.setState({ isDelete: false })}>Is Delete</button>
          </Modal>
        )}
        {isEdit && (
          <Modal>
            <button onClick={() => this.setState({ isEdit: false })}>Is Edit</button>
          </Modal>
        )}
      </Fragment>
    );
  }
}

AdminStatementItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  toggleIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default AdminStatementItem;
