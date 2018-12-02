import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  ${props => {
    const { theme } = props;
    return css`
      color: ${theme.colors.blackSecondary};
      height: 20px;
      max-width: 15px;
      transform: ${props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    `;
  }};
`;

const DropdownButton = styled.button`
  ${props => {
    const { theme } = props;
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 10px;
      background-color: ${theme.colors.white};
      color: ${theme.colors.blackSecondary};
      ${theme.font(20, 600)};
      position: relative;
      border: 1px solid ${theme.colors.blackSecondary};
      border-radius: 3px;
      && {
        margin-top: 10px;
        margin-bottom: 15px;
      }
    `;
  }};
`;

const DropdownList = styled.div`
  ${props => {
    const { theme } = props;
    return css`
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: absolute;
      top: calc(100% + 5px);
      left: 0;
      width: 100%;
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow};
      transition: opacity 0.2s ${theme.ease}, transform 0.2s ${theme.ease},
        visibility 0s linear 0.2s;
      visibility: hidden;
      transform: translateY(-5px);
      opacity: 0;
      z-index: ${theme.zIndex.middle};
      button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid ${theme.colors.blackSecondary};
        color: ${theme.colors.black};
        ${theme.font(20, 600)};
        &:last-child {
          border: none;
        }
      }
      ${props.isOpen &&
        `
				transition: visibility 0s linear, opacity .2s ${theme.ease}, transform .2s ${
          theme.ease
        };
				visibility: visible;
				transform: translateY(0);
				opacity: 1;
			`};
    `;
  }};
`;

class Dropdown extends Component {
  state = {
    isOpen: false
  };
  render() {
    const { placeholder, value, children, className } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <DropdownButton
          onClick={() => this.setState({ isOpen: !isOpen })}
          className={className}>
          {!!value && value.length > 0 ? value : placeholder}{' '}
          <Icon icon="caret-down" size="5x" isOpen={this.state.isOpen} />
          <DropdownList isOpen={isOpen}>{children}</DropdownList>
        </DropdownButton>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {};

export default Dropdown;
