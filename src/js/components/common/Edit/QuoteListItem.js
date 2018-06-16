import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AutoSizeInput from '../../../utils/AutoSizeInput';
import EditToolButtons from './EditToolButtons';
import EditQuoteButtons from './EditQuoteButtons';
import EditDelete from './EditDelete';
import EditQuoteItem from './EditQuoteItem';

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
			<EditQuoteItem
				isEditable={isEditable}
				isOverlay={editActive && !isEditable}
				onClick={() => changeQuote('toolsVisible', !toolsVisible, quoteKey)}
			>

				<EditDelete isVisible={isDeletable} >
					Are you sure you want to delete this?
					<EditDelete.ButtonContainer>
						<EditDelete.Icon
							iconClassname="fas fa-check-circle"
							onClick={() => changeQuote('deleteQuote', null, quoteKey)}
						/>
						<EditDelete.Icon
							iconClassname="fas fa-times-circle"
							onClick={() => changeQuote('isDeletable', false, quoteKey)}
						/>
					</EditDelete.ButtonContainer>
				</EditDelete>

				{!isEditable && (
					<EditToolButtons isVisible={toolsVisible} >
						<EditToolButtons.Icon
							iconClassname="fas fa-trash"
							onClick={() => changeQuote('isDeletable', true, quoteKey)}
						/>
						<EditToolButtons.Icon
							iconClassname="fas fa-edit"
							onClick={() => changeQuote('isEditable', true, quoteKey)}
						/>
					</EditToolButtons>
				)}

				{isEditable ? (
						<AutoSizeInput
							defaultHeight={21}
							value={this.state.inputValue}
							onChange={(e) => cleanUpText(e)}
						/>
				) : (
					<EditQuoteItem.ItemContent>
						{value}
					</EditQuoteItem.ItemContent>
				)}
			</EditQuoteItem>
			{isEditable && (
				<EditQuoteButtons>
					<EditQuoteButtons.Button onClick={() => {changeQuote('isEditable', false, quoteKey); this.setState({inputValue: value})}}>
						<i className="fas fa-times"></i>
					</EditQuoteButtons.Button>
					<EditQuoteButtons.Button onClick={() => changeQuote('value', this.state.inputValue, quoteKey)}>
						<i className="fas fa-check"></i>
					</EditQuoteButtons.Button>
				</EditQuoteButtons>
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