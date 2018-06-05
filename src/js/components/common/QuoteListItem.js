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
			changeQuote,
			editActive
		} = this.props;

		const cleanUpText = e => {
			const newText = e.target.value.replace(/\n/g, '');
			this.setState({ inputValue: newText })
		}

		const isEditableClass = isEditable ? 'is-editable' : '';
		const isOverlayClass = editActive && !isEditable ? 'quote-list-item__overlay' : '';

		return (
			<React.Fragment>
			<div
				className={`quote-list-item ${isEditableClass} ${isOverlayClass}`}
				onClick={() => changeQuote('toolsVisible', !toolsVisible, quoteKey)}
			>
				{isDeletable && (
					<QuoteDelete
						text="Are you sure you want to delete this?"
						cancelClick={() => changeQuote('isDeletable', false, quoteKey)}
						approveClick={() => changeQuote('deleteQuote', null, quoteKey)}
					/>
				)}
				{toolsVisible && (
					<ToolButtons
						deleteClick={() => changeQuote('isDeletable', true, quoteKey)}
						editClick={() => changeQuote('isEditable', true, quoteKey)}
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
					cancelClick={() => changeQuote('isEditable', false, quoteKey)}
					approveClick={() => changeQuote('value', this.state.inputValue, quoteKey)}
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
	changeQuote: PropTypes.func,
};

export default QuoteListItem;