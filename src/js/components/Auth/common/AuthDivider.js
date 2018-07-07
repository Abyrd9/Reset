import styled from 'styled-components';
import React from 'react';
import { Font, Color } from '../../common/Mixins';

const Span = styled.span`
    content: "";
    width: 100px;
    height: 1.5px;
    background-color: ${Color.Gray};
    margin: 0px 10px;
`

const Text = styled.p`
		margin: 0;
    ${Font(700, '18px')}
		color: ${Color.BlackLight};
`

const Container = styled.div`
    margin: 5px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AuthDivider = (props) => {
	return (
		<Container>
			<Span /><Text>{props.children}</Text><Span />
		</Container>
	);
}

export default AuthDivider;