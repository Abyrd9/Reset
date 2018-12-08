import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminStatementListStyles } from './AdminStatementListStyles';

class AdminStatementList extends Component {
  render() {
    return <AdminStatementListStyles>{this.props.children}</AdminStatementListStyles>;
  }
}

AdminStatementList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AdminStatementList;
