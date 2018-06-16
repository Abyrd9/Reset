import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../Mixins';

const IconComponent = props => {
	return (
		<i className={`${props.iconClassname} ${props.className}`}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.Gray};
	margin-right: 10px;
	font-size: 14px;
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;