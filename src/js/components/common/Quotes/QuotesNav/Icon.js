import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`fas fa-bars ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.Red};
	font-size: 22px;
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;