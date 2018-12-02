import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.primary};
      height: 20px;
      max-width: 15px;
      margin: 3px 0px;
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
      max-width: 35px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      span {
        display: inline-block;
        height: 20px;
        width: 1px;
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
