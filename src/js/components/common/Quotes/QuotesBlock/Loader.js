import styled from 'styled-components';
import { Depth, Color } from '../../Mixins';

const Loader = styled.div`
	${Depth('top')}
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: ${Color.White};
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		margin-top: 65px;
		height: 120px;
	}
`

export default Loader;