import React, { Component } from 'react';
import { isAbsolute } from 'path';

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
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevState.height, this.ghost.clientHeight)
		// if (prevState.height !== this.ghost.clientHeight) {
		// 	this.setFilledTextareaHeight(this.props.defaultHeight);
		// }
	}

  setFilledTextareaHeight(defaultHeight) {
    if (this.mounted) {
			const element = this.ghost;
			const height = element.clientHeight > defaultHeight ? element.clientHeight : defaultHeight;
      this.setState({
        height,
      });
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
		} = props;

    return (
        <textarea
          className={className}
          name="textarea"
					value={value}
					placeholder={placeholder}
          style={{
            height,
            resize: isOneLine ? "none" : null
					}}
					onKeyUp={() => {this.setFilledTextareaHeight(props.defaultHeight)}}
					onChange={onChange}
        />
    );
	}
	
	getGhostField(props) {
		const {
			className,
			value,
		} = props

    return (
      <div
        className={`${className} ghost`}
        ref={(c) => this.ghost = c}
        aria-hidden="true"
      >
        {value}
      </div>
    );
  }

	render() {
			return (
				<div style={{position: 'relative', width: '100%'}}>
					{this.getExpandableField(this.props)}
					{this.getGhostField(this.props)}
				</div>
			)
	}
}

export default AutoSizeInput;