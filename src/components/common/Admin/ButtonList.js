import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const ButtonListContainer = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      button {
        padding: 5px 0px;
        flex: 1;
        background-color: ${theme.colors.primary};
        &:first-of-type {
          border-right: 1px solid ${theme.colors.white};
        }
      }
    `;
  }};
`;

class ButtonList extends Component {
  render() {
    return (
      <ButtonListContainer>
        <button onClick={this.props.cancelClick}>
          <Icon icon="times" />
        </button>
        <button onClick={this.props.saveClick}>
          <Icon icon="check" />
        </button>
      </ButtonListContainer>
    );
  }
}

ButtonList.propTypes = {};

export default ButtonList;
