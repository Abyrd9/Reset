import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminStatementListStyled } from './AdminStatementListStyled';

class AdminStatementList extends Component {
  render() {
    return <AdminStatementListStyled>{this.props.children}</AdminStatementListStyled>;
  }
}

AdminStatementList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AdminStatementList;
