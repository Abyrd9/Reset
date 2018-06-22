import styled from 'styled-components';
import { Color } from '../../Mixins';

const EditBackdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${Color.White};
	transform: translateX(80px);
	opacity: 0;
	visibility: hidden;
	transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1), visibility 0s linear 0.3s;
	${props => {
		if (props.isOpen) {
			return `
			transform: translateX(0);
    	opacity: 1;
    	visibility: visible;
    	transition: visibility, opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1), transform 0.3s cubic-bezier(0.4, 0, 0.6, 1);
			`
		}
	}}
	@media (min-width: 760px) {
		transform: translateY(40px);
		height: 100vh;
		${props => {
			if (props.isOpen) {
				return `
				transform: translateY(0);
				`
			}
		}}
	}
`

export default EditBackdrop;