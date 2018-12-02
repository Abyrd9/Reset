import React, { Component } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  resize: none;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  padding: 15px 10px;
`;

const Ghost = styled.div`
  padding: 15px 10px;
  border: none;
  box-sizing: border-box;
  left: 0;
  outline: none;
  overflow: hidden;
  position: absolute;
  top: 0;
  visibility: hidden;
  white-space: pre-wrap;
  width: 100%;
  word-wrap: break-word;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const Label = styled.label`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

class AutoSizeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: !!this.props.defaultHeight ? this.props.defaultHeight : 'auto'
    };
    this.ghost = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const ghost = this.ghost;
    if (!!ghost && prevState.height !== ghost.current.clientHeight) {
      return ghost.current.clientHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const ghost = this.ghost;
    if (
      !!ghost &&
      prevState.height !== ghost.current.clientHeight &&
      ghost.current.clientHeight >= this.props.defaultHeight
    ) {
      this.setState({ height: ghost.current.clientHeight });
    }
  }

  getResizeTextField(props) {
    const { height } = this.state;
    const {
      autoFocus,
      className,
      disabled,
      form,
      maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      value
    } = props;
    return (
      <TextArea
        autoFocus={autoFocus}
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        value={value}
        style={{
          height
        }}
      />
    );
  }

  getGhostResizeField(props) {
    const { className, value } = props;
    return (
      <Ghost ref={this.ghost} aria-hidden="true">
        {value}
      </Ghost>
    );
  }

  render() {
    return (
      <Label>
        {this.getResizeTextField(this.props)}
        {this.getGhostResizeField(this.props)}
      </Label>
    );
  }
}

export default AutoSizeInput;
