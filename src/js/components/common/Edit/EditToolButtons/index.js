import styled from 'styled-components';
import { Color, Font, Depth } from '../../Mixins';

import Icon from './Icon';

const EditToolButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: solid 1px ${Color.Gray};
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.3s, max-width 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.5s;
		i:nth-child(1) {
			transform: translateY(-10px);
    	opacity: 0;
    	transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1);
		}
		i:nth-child(2) {
			transform: translateY(-10px);
			opacity: 0;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.1s, opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.1s;
		}
	${props => {
		if (props.isVisible) {
			return `
			max-width: 55px;
    	max-height: 85px;
    	transition: max-width 0.3s cubic-bezier(0.4, 0, 0.6, 1), max-height 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
			i:nth-child(1) {
				transform: translateY(0);
    		opacity: 1;
    		transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.5s, opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.5s;
			}
			i:nth-child(2) {
				transform: translateY(0);
    		opacity: 1;
    		transition: transform 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.6s, opacity 0.3s cubic-bezier(0.4, 0, 0.6, 1) 0.6s;
			}
			`
		}
	}}

`

EditToolButtons.Icon = Icon;

export default EditToolButtons;