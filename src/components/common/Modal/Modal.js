import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ModalStylesBackdrop, ModalStylesContent } from './ModalStyles';
import AdminContextComponent from '../../contexts/AdminContext';

class Modal extends Component {
  componentDidMount() {
    const element = document.createElement('div');
    element.setAttribute('id', 'modal');
    document.body.appendChild(element);
  }

  render() {
    const ModalContent = (
      <ModalStylesBackdrop>
        <ModalStylesContent>
          <AdminContextComponent>{this.props.children}</AdminContextComponent>
        </ModalStylesContent>
      </ModalStylesBackdrop>
    );
    return ReactDOM.createPortal(ModalContent, document.getElementById('modal'));
  }
}

export default Modal;
