import styled from 'styled-components';
import { Font, Color } from '../../Mixins';

import ItemContent from './ItemContent';

const EditQuoteItem = styled.div`
	padding: 15px 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: ${props => props.isEditable ? 'auto' : '115px'};
	position: relative;
	border-bottom: solid 1px #d7dadb;
	background-color: #fff;
	${props => {
		if (props.isOverlay) {
			return `
			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .3);
			}
			`
		}
	}}
`
EditQuoteItem.ItemContent = ItemContent;

export default EditQuoteItem;