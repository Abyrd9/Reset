import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AutoSizeInput from '../../../utils/AutoSizeInput';
import EditCreatorStyles from './EditCreatorStyles';

class EditCreator extends Component {
	constructor() {
		super();
		this.state = {
			height: 0,
		}
	}

	changeHeight = (height) => {
		const containerHeight = height + 45
		this.setState({ height: containerHeight })
	}

	render() {
		return (
			<EditCreatorStyles height={this.state.height}>
				<AutoSizeInput
					defaultHeight={62}
					value={this.props.value}
					placeholder="Add New Truth..."
					onChange={this.props.onChange}
					disabled={this.props.disabled}
					onFocus={this.props.onFocus}
					changeParentHeight={this.changeHeight}
				/>
				<EditCreatorStyles.Button
					onClick={this.props.onClick}
					isActive={this.props.value.length > 0}
				>
					<i className="fas fa-plus-circle"></i>
				</EditCreatorStyles.Button>
			</EditCreatorStyles>
		);
	}
};

EditCreator.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	onFocus: PropTypes.bool,
};

export default EditCreator;