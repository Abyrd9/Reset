import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AdminStatementToolListStyles,
  AdminStatementToolIcon
} from './AdminStatementToolListStyles';

class AdminStatementToolList extends Component {
  render() {
    return (
      <AdminStatementToolListStyles>
        <div>
          <AdminStatementToolIcon icon="trash" onClick={this.props.onDeleteClick} />
          <AdminStatementToolIcon icon="edit" onClick={this.props.onEditClick} />
        </div>
        <span />
      </AdminStatementToolListStyles>
    );
  }
}

AdminStatementToolList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
};

export default AdminStatementToolList;
