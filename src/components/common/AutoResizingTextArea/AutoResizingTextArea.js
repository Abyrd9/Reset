import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextArea, Ghost, Label } from './AutoResizingTextAreaStyles';

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
      disabled,
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
        disabled={disabled}
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
    const { value } = props;
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

AutoSizeInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool
};

export default AutoSizeInput;
