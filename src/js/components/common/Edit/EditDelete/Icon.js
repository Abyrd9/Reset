import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`${props.iconClassname} ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.White};
	font-size: 36px;
	margin: 0px 10px;
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;