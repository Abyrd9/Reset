import styled from 'styled-components';

import Image from './Image';
import Icon from './Icon';
import { Color, Shadow, Depth } from '../../Mixins';

const EditNav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	background-color: ${Color.Blue};
	padding: 20px;
	${Shadow(2)}
	${Depth('top')}
	@media (min-width: 760px) {
		justify-content: center;
	}
`

EditNav.Icon = Icon;
EditNav.Image = Image;

export default EditNav;