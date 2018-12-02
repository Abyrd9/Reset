import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AdminContext } from '../Contexts/AdminContext';
import styled, { css } from 'styled-components';
import AutoResizingTextArea from '../AutoResizingTextArea';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      font-size: 24px;
    `;
  }};
`;

const Container = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    `;
  }};
`;

class CreateStatement extends Component {
  static contextType = AdminContext;
  state = { value: '' };
  render() {
    const {
      category: { categoryId, statements }
    } = this.props;
    const hasCategoryId = !!categoryId ? categoryId.length > 0 : false;
    return (
      <Container>
        <AutoResizingTextArea
          defaultHeight={58}
          placeholder="Add New Statement..."
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          disabled={!hasCategoryId}
        />
        <Button
          disabled={!hasCategoryId}
          onClick={() => {
            if (this.state.value.length > 0) this.setState({ value: '' });
            this.context.handleCreateStatement(
              categoryId,
              this.state.value,
              statements
            );
          }}
          isFlush>
          <Icon icon="plus-circle" />
        </Button>
      </Container>
    );
  }
}

CreateStatement.propTypes = {};

export default CreateStatement;
