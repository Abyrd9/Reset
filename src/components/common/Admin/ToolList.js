import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      font-size: 24px;
      margin: 8px 0px;
    `;
  }};
`;

const ToolListContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: 50px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      span {
        display: inline-block;
        height: 40px;
        width: 2px;
        background-color: ${theme.colors.gray};
        margin-left: 10px;
      }
    `;
  }};
`;

class ToolList extends Component {
  render() {
    return (
      <ToolListContainer>
        <div>
          <Icon icon="trash" onClick={this.props.onDeleteClick} />
          <Icon icon="edit" onClick={this.props.onEditClick} />
        </div>
        <span />
      </ToolListContainer>
    );
  }
}

ToolList.propTypes = {};

export default ToolList;
