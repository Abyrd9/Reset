import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButtonStyled, DropdownListStyled, DropdownIcon } from './DropdownStyled';

class Dropdown extends Component {
  state = {
    isOpen: false
  };
  render() {
    const { title, placeholder, value, children } = this.props;
    const { isOpen } = this.state;
    return (
      <React.Fragment>
        <DropdownButtonStyled onClick={() => this.setState({ isOpen: !isOpen })}>
          <p>{title}</p>
          {!!value && value.length > 0 ? value : placeholder}{' '}
          <DropdownIcon icon="caret-down" size="5x" isOpen={this.state.isOpen} />
          <DropdownListStyled isOpen={isOpen}>{children}</DropdownListStyled>
        </DropdownButtonStyled>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Dropdown;
