import styled from 'styled-components';
import { Font, Color, Animation } from '../../../Mixins';

const Placeholder = styled.p`
	padding-top: 1px;
	${Font(400, '14px')}
	color: ${Color.BlackLight};
	transform: ${props => props.isActive ? 'translateY(-20px) scale(.8)' : 'translateY(0) scale(1)'};
	opacity: ${props => props.hasText ? '0' : '1'};
	transform-origin: left;
	${Animation('all', '.15s', 'ease-out')}
`

export default Placeholder;