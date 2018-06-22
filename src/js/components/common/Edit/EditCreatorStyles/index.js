import styled from 'styled-components';

import Button from './Button';
import { Color } from '../../Mixins';

const EditCreatorStyles = styled.div`
		width: 100%;
    border-top: 2px #d7dadb solid;
		position: fixed;
		min-height: 110px;
		${props => `top: calc(100% - ${props.height}px);`}
		left: 0;
		@media (min-width: 760px) {
			max-width: 700px;
			border: none;
			&:before {
				content: '';
				position: absolute;
				top: -50px;
				left: 0;
				height: 30px;
				width: 100%;
				background: rgb(237,242,244);
				background: linear-gradient(0deg, rgba(237,242,244,1) 0%, rgba(237,242,244,0) 100%);
			}
		}
`

EditCreatorStyles.Button = Button;

export default EditCreatorStyles;