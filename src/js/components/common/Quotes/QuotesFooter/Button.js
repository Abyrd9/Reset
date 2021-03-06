import styled from 'styled-components';
import { Font, Color, Shadow, Animation } from '../../Mixins';

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	${Font(400, '14px')}
	color: ${Color.White};
	${Shadow(2)}
	background-color: ${Color.BlueLight};
	border-radius: 5px;
	outline: none;
	border: none;
	max-width: 400px;
	padding: 8px 0px;
	margin: 15px 0px;
	transform: scale(1);
	${Animation('all', '.1s', 'ease-in-out', '0s')}
	&:focus, &:active {
		border: none;
		outline: none;
	}
	&:active {
		${Shadow(1)}
		transform: scale(.99);
	}
	i {
		margin-right: 8px;
	}
	@media (min-width: 760px) {
		margin-bottom: 200px;
	}
`

export default Button;