import styled from 'styled-components';
import { Font, Color } from '../../Mixins';

const Title = styled.h1`
	text-align: center;
	width: 100%;
	${Font(700, '60px')}
	color: ${Color.Black};
	&:after {
		content: '.';
		${Font(700, '60px')}
		color: ${Color.Red};
	}
	@media (max-width: 320px) {
		${Font(700, '40px')}
	}
`

export default Title;