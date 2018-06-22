import styled from 'styled-components';
import { Color, Shadow } from '../../../Mixins';

const List = styled.ul`
	background-color: ${Color.White};
	${Shadow(1)}
	min-width: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	list-style: none;
	max-height: 50px;
`

export default List;