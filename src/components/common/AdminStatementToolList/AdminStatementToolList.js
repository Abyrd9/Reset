import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AdminStatementToolListStyled,
  AdminStatementToolIcon
} from './AdminStatementToolListStyled';

class AdminStatementToolList extends Component {
  render() {
    return (
      <AdminStatementToolListStyled>
        <div>
          <AdminStatementToolIcon icon="trash" onClick={this.props.onDeleteClick} />
          <AdminStatementToolIcon icon="edit" onClick={this.props.onEditClick} />
        </div>
        <span />
      </AdminStatementToolListStyled>
    );
  }
}

AdminStatementToolList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
};

export default AdminStatementToolList;
