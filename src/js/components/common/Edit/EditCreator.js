import React from 'react';
import PropTypes from 'prop-types';
import AutoSizeInput from '../../../utils/AutoSizeInput';
import EditCreatorStyles from './EditCreatorStyles';

const EditCreator = props => {
	return (
		<EditCreatorStyles>
			<AutoSizeInput
				defaultHeight={62}
				value={props.value}
				placeholder="Add New Truth..."
				onChange={props.onChange}
				disabled={props.disabled}
			/>
			<EditCreatorStyles.Button
				onClick={props.onClick}
				isActive={props.value.length > 0}
			>
				<i className="fas fa-plus-circle"></i>
			</EditCreatorStyles.Button>
		</EditCreatorStyles>
	);
};

EditCreator.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
};

export default EditCreator;