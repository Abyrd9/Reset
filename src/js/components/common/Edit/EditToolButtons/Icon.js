import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`${props.iconClassname} ${props.className}`} onClick={props.onClick}></i>
	)
}

const IconStyled = styled(IconComponent)`
		padding-right: 30px;
    margin: 10px 0px;
    font-size: 22px;
    color: ${Color.Red};
`

const Icon = (props) => {
	return (
		<IconStyled {...props} />
	)
}

export default Icon;