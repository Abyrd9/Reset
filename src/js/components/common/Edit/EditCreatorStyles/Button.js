import styled from 'styled-components';
import { Font, Color, Shadow, Animation } from '../../Mixins';

const Button = styled.button`
	width: 100%;
	${Font(400, '24px')}
	color: ${Color.White};
	background-color: ${props => props.isActive ? `${Color.Red}` : `${Color.Gray}`};
	outline: none;
	border: none;
	padding: 8px 0px;
	transform: scale(1);
	${Animation('all', '.3s', 'ease-in-out', '0s')}
	&:focus, &:active {
		border: none;
		outline: none;
	}
	@media (min-width: 760px) {
		border-radius: 50px;
		margin: 10px 0px;
		margin-bottom: 80px;
	}
`

export default Button;