import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`${props.iconClassname} ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.Red};
	font-size: 22px;
	@media (min-width: 768px) {
		font-size: 26px;
	}
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;