import React, { Component } from 'react';
import { isAbsolute } from 'path';

import styled from 'styled-components';
import { Color, Font } from '../components/common/Mixins';
const TextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    resize: none;
    padding: 20px;
    border: none;
    outline: none;
		${Font(500, '18px')}
		color: ${Color.Black};
`

const Ghost = styled.div`
	box-sizing: border-box;
	width: 100%;
	overflow: hidden;
	resize: none;
	padding: 20px;
	border: none;
	outline: none;
	${Font(500, '18px')}
	color: ${Color.Black};
	opacity: 0.3;
	display: block;
	white-space: pre-wrap;
	word-wrap: break-word;
	visibility: hidden;
	position: absolute;
	top: 0;
`

class AutoSizeInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 'auto',
		}
		this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
	}
	componentDidMount() {
		this.mounted = true;
		const { defaultHeight } = this.props;
		this.setFilledTextareaHeight(defaultHeight);
		!!this.props.changeParentHeight && this.props.changeParentHeight(defaultHeight);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.value !== this.props.value) {
			this.setFilledTextareaHeight(this.props.defaultHeight);
		}
	}

  setFilledTextareaHeight(defaultHeight) {
    if (this.mounted) {
			const element = this.ghost;
			const height = element.clientHeight > defaultHeight ? element.clientHeight : defaultHeight;
      this.setState({
        height,
			});
			!!this.props.changeParentHeight && this.props.changeParentHeight(height);
		}
	}
	
	getExpandableField(props) {
    const isOneLine = this.state.height <= props.defaultHeight;
    const { height } = this.state;
		const {
			className,
			value,
			placeholder,
			onChange,
			disabled,
			onFocus,
		} = props;

    return (
        <TextArea
					maxLength="300"
          name="textarea"
					value={value}
					placeholder={placeholder}
          style={{
            height,
            resize: isOneLine ? "none" : null
					}}
					onChange={onChange}
					disabled={disabled}
					onFocus={onFocus}
        />
    );
	}
	
	getGhostField(props) {
		const {
			className,
			value,
		} = props

    return (
      <Ghost
        innerRef={(c) => this.ghost = c}
        aria-hidden="true"
      >
        {value}
      </Ghost>
    );
  }

	render() {
			return (
				<div style={{
					position: 'relative',
					width: '100%',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
				}}>
					{this.getExpandableField(this.props)}
					{this.getGhostField(this.props)}
				</div>
			)
	}
}

export default AutoSizeInput;