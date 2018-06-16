import styled from 'styled-components';
import { Color } from '../Mixins';

const Backdrop = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	overflow: hidden;
	background-color: ${Color.White};
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: ${props => {
		if (props.auth) return 'space-evenly';
		if (props.quotes) return 'space-between';
	}};
	align-items: center;
`

export default Backdrop;