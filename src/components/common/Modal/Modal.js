import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ModalStyledBackdrop, ModalStyledContent } from './Modal.styles';

class Modal extends Component {
  state = { isAppended: false };

  componentDidMount() {
    const element = document.createElement('div');
    element.setAttribute('id', 'modal');
    document.body.appendChild(element);
    this.setState({ isAppended: true });
  }

  componentWillUnmount() {
    const element = document.getElementById('modal');
    document.body.removeChild(element);
    this.setState({ isAppended: false });
  }

  render() {
    const { isAppended } = this.state;
    const ModalContent = (
      <ModalStyledBackdrop>
        <ModalStyledContent>{this.props.children}</ModalStyledContent>
      </ModalStyledBackdrop>
    );
    return (
      <Fragment>
        {isAppended ? ReactDOM.createPortal(ModalContent, document.getElementById('modal')) : null}
      </Fragment>
    );
  }
}

export default Modal;
