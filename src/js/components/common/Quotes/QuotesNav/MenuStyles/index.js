import styled from 'styled-components';

import List from './List';
import ListItem from './ListItem';
import { Animation } from '../../../Mixins';

const MenuStyles = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: flex-end;
	opacity: 0;
	visibility: hidden;
	transform: translateX(20px);
	${Animation('all', '.2s', 'ease-in-out')}
	${props => {
		if (props.isOpen) {
			return `
				opacity: 1;
				transform: translateX(0px);
				visibility: visible;
			`
		}
	}}
`

MenuStyles.List = List;
MenuStyles.ListItem = ListItem;

export default MenuStyles;