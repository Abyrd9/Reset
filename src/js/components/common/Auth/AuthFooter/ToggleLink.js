import styled from 'styled-components';
import React from 'react';
import { Font, Color, Shadow } from '../../Mixins';

const Text = styled.p`
	${Font(700, '14px')}
	color: ${Color.Red};
	margin-top: 30px;
	margin-bottom: 20px;
	@media (max-width: 320px) {
		margin-top: 8px;
	}
`

const Link = styled.a`
	${Font(900, '14px')}
	color: ${Color.Red};
	text-decoration: underline;
`

const ToggleLink = (props) => {
	return (
		<Text>
			{props.text}
			<Link onClick={props.onClick}>{props.linkText}</Link>
		</Text>
	)
}

export default ToggleLink;