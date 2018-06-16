import styled from 'styled-components';
import { Font, Color, Animation } from '../../../Mixins';

const ListItem = styled.li`
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${Font(600, '14px')}
	color: ${Color.Black};
	${Animation('all', '.2s', 'ease-in-out')}
	&:active {
		background-color: ${Color.Red};
		color: ${Color.White};
	}
`

export default ListItem;