import styled from 'styled-components';
import { Font, Color, Shadow, Animation } from '../../Mixins';

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	${Font(500, '16px')}
	color: ${Color.White};
	${Shadow(3)}
	background-color: ${Color.Red};
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 12px 0px;
	margin: 15px 0px;
	transform: scale(1);
	${Animation('all', '.1s', 'ease-in-out', '0s')}
	margin-top: 80px;
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
	&:disabled {
		box-shadow: none;
		background-color: ${Color.Gray};
		color: ${Color.BlackLight};
	}
	position: relative;
	@media (min-width: 760px) {
		max-width: 500px;
		margin-top: 0;
		margin-bottom: ${props => props.hasQuote ? '30px' : '200px'};
	}
`

export default Button;