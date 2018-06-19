import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`fas fa-arrow-left ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.White};
	font-size: 28px;
	@media (min-width: 760px) {
		margin-right: 330px;
	}
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;