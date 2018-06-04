import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AutoSizeInput from '../../utils/AutoSizeInput';
import ToolButtons from './ToolButtons';
import QuoteEditButtons from './QuoteEditButtons';
import QuoteDelete from './QuoteDelete';

class QuoteListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		}
	}

	componentDidMount() {
		const { value } = this.props;
		this.setState({ inputValue: value })
	}

	render() {

		const {
			quoteKey,
			value,
			toolsVisible,
			isDeletable,
			isEditable,
			quoteChange,
		} = this.props;

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ inputValue: newText })
		}

		return (
			<React.Fragment>
			<div
				className={`quote-list-item ${isEditable ? 'is-editable' : ''}`}
				onClick={() => quoteChange('toolsVisible', !toolsVisible, quoteKey)}
			>
				{isDeletable && (
					<QuoteDelete
						text="Are you sure you want to delete this?"
						cancelClick={() => quoteChange('isDeletable', false, quoteKey)}
						approveClick={() => quoteChange('deleteQuote', null, quoteKey)}
					/>
				)}
				{toolsVisible && (
					<ToolButtons
						deleteClick={() => quoteChange('isDeletable', true, quoteKey)}
						editClick={() => quoteChange('isEditable', true, quoteKey)}
					/>
				)}
				{isEditable ? (
						<AutoSizeInput
							defaultHeight={21}
							className="quote-list-item__input"
							value={this.state.inputValue}
							onChange={(e) => cleanUpText(e)}
						/>
				) : (
					<div className="quote-list-item__content">
						{value}
					</div>
				)}
			</div>
			{isEditable && (
				<QuoteEditButtons
					cancelClick={() => quoteChange('isEditable', false, quoteKey)}
					approveClick={() => quoteChange('value', this.state.inputValue, quoteKey)}
				/>
			)}
			</React.Fragment>
		);
	}
};

QuoteListItem.propTypes = {
	quoteKey: PropTypes.string,
	value: PropTypes.string,
	toolsVisible: PropTypes.bool,
	isDeletable: PropTypes.bool,
	isEditable: PropTypes.bool,
	quoteChange: PropTypes.func,
};

export default QuoteListItem;