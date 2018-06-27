import styled from 'styled-components';
import { Color } from '../Mixins';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: 0;
  align-items: 0;
  background-color: rgba(0, 0, 0, .3);
  ${props => props.isOpen ? '' : 'display: none;'}
`

const ModalContent = styled.div`
 width: 100%;
  margin: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  position: relative;
`

const IconComponent = props => {
	return (
		<i className={`fas fa-times ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.White};
	font-size: 36px;
  margin: 0px 10px;
  position: absolute;
  top: 0;
  left: 100%;
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}


class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.setState({ isOpen: this.props.isOpen })
  }

  componentDidUpdate(prevProps) {
    const isDifferent = this.props.isOpen !== this.state.isOpen || prevProps.isOpen !== this.props.isOpen;
    if (isDifferent) {
      this.setState({ isOpen: this.props.isOpen })
    }
  }

  render() {
    return (
      <ModalContainer isOpen={this.state.isOpen} onClick={() => this.setState({ isOpen: false })}>
        <ModalContent>
          <Icon onClick={() => this.setState({ isOpen: false })} />
          {this.props.children}
        </ModalContent>
      </ModalContainer>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;