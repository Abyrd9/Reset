import React from 'react';
import styled from 'styled-components';
import { Color, Font, Shadow, Animation } from '../../Mixins';

const IconComponent = props => {
	return (
		<i className={`fab fa-facebook-f ${props.iconClass} ${props.className}`}></i>
	)
}

const IconStyled = styled(IconComponent)`
	color: ${Color.White};
	position: absolute;
	font-size: 14px;
	top: calc(50% - 7px);
	left: 10px;
`

const Button = styled.button`
	width: 85%;
	${Font(400, '12px')}
	color: ${Color.White};
	${Shadow(2)}
	background-color: ${props => {
		switch (props.icon) {
		case 'google':
			return `${Color.GoogleOrange}`;
			break;
		case 'facebook':
			return `${Color.FacebookBlue}`;
			break;
		default:
			return '';
	}
}}
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 8px 0px;
	margin: 5px 0px;
	transform: scale(1);
	${Animation('all', '.1s', 'ease-in-out', '0s')}
	&:focus, &:active {
		border: none;
		outline: none;
	}
	&:active {
		${Shadow(1)}
		transform: scale(.99);
	}
	b {
		text-transform: capitalize;
	}
`

const SocialButton = (props) => {

	let iconClass;
	switch (props.icon) {
		case 'google':
			iconClass = 'fab fa-google';
			break;
		case 'facebook':
			iconClass = 'fab fa-facebook-f'
			break;
		default:
			iconClass = '';
	}

	return (
		<Button onClick={props.onClick} icon={props.icon}>
			<IconStyled {...props} iconClass={iconClass} />
			Continue with <b>{props.icon}</b>
		</Button>
	)
}

export default SocialButton;