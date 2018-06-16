import React from 'react';
import styled from 'styled-components';
import { Color, Depth } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`${props.iconClassname} ${props.className}`}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.GrayLight};
	position: absolute;
	font-size: 68px;
	${props => {
		if (props.right) {
			return `
				top: calc(100% - 24px);
				left: calc(100% - 68px);
			`
		}
		if (props.left) {
			return `
				top: -44px;
				left: 0px;
			`
		}
	}}
	
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;