import styled from 'styled-components';
import { Font, Color } from '../../../Mixins';

const Input = styled.input`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
		outline: none;
		${Font(400, '16px')}
		padding-bottom: 2px;
		color: ${Color.BlackLight};
`

export default Input;