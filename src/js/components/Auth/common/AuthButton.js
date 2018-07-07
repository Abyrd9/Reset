import styled from 'styled-components';
import { Font, Color, Shadow, Animation } from '../../common/Mixins';

const AuthButton = styled.button`
	width: 100%;
	${Font(400, '14px')}
	color: ${Color.White};
	${Shadow(2)}
	background-color: ${Color.Red};
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 8px 0px;
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
`

export default AuthButton;