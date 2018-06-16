import styled from 'styled-components';
import { Color, Font, Depth } from '../../Mixins';

import ButtonContainer from './ButtonContainer';
import Icon from './Icon';

const EditDelete = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${Color.Red};
	${Font(500, '18px')}
	color: ${Color.White};
	${Depth('middle')}
	transform: translateY(-15px);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1), visibility 0s linear 0.3s;
	${props => {
		if (props.isVisible) {
			return `
			transform: translateY(0);
    	opacity: 1;
    	visibility: visible;
    	transition: visibility, opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1), transform 0.3s cubic-bezier(0.4, 0, 0.6, 1);
			`
		}
	}}
`

EditDelete.ButtonContainer = ButtonContainer;
EditDelete.Icon = Icon;

export default EditDelete;