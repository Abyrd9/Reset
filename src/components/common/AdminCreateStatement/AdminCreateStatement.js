import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminContext } from '../../contexts/AdminContext';
import {
  AdminCreateStatementStyles,
  AdminCreateButton,
  AdminCreateAddIcon
} from './AdminCreateStatementStyles';
import AutoResizingTextArea from '../AutoResizingTextArea/AutoResizingTextArea';

class CreateStatement extends Component {
  static contextType = AdminContext;
  state = { value: '' };

  handleCreateStatement = () => {
    const { value } = this.state;
    const { categoryId } = this.props;
    this.setState({ value: '' });
    this.context.handleCreateStatement(categoryId, value);
  };

  render() {
    const { categoryId } = this.props;
    const { value } = this.state;
    const isDisabled = !!categoryId ? categoryId.length <= 0 : true;
    return (
      <AdminCreateStatementStyles>
        <AutoResizingTextArea
          defaultHeight={58}
          placeholder="Add New Statement..."
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
          disabled={isDisabled}
        />
        <AdminCreateButton
          disabled={value.length <= 0}
          onClick={() => this.handleCreateStatement()}>
          <AdminCreateAddIcon icon="plus-circle" />
        </AdminCreateButton>
      </AdminCreateStatementStyles>
    );
  }
}

CreateStatement.propTypes = {
  categoryId: PropTypes.string
};

export default CreateStatement;
