import styled from 'styled-components';
import { Color, Font } from '../../Mixins';

const ButtonCountdown = styled.p`
	color: ${Color.Black};
	${Font(400, '12px')}
	position: absolute;
	top: calc(100% + 10px);
	left: 0;
	width: 100%;
	text-align: center;
`

export default ButtonCountdown;