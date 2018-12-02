import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.white};
      font-size: 22px;
      margin: 0px 8px;
      margin-top: 12px;
    `;
  }};
`;

const DeleteConfirmationContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      ${theme.font(12, 600)};
      min-height: 52px;
      padding: 10px;
    `;
  }};
`;

class DeleteConfirmation extends Component {
  render() {
    return (
      <DeleteConfirmationContainer>
        {this.props.text}
        <div>
          <Icon onClick={this.props.cancelClick} icon="times-circle" />
          <Icon onClick={this.props.saveClick} icon="check-circle" />
        </div>
      </DeleteConfirmationContainer>
    );
  }
}

DeleteConfirmation.propTypes = {};

export default DeleteConfirmation;