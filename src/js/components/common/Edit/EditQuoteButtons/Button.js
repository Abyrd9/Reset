import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Mixins';

const Button = styled.button`
	flex: auto;
  border: none;
  outline: none;
  background-color: ${Color.Red};
  padding: 8px 0px;
	${props => props.isLeft ? `border-right: 1px solid ${Color.Gray} !important` : ''}
	${props => props.isRight ? `border-left: 1px solid ${Color.Gray} !important` : ''}
	i {
		color: ${Color.White};
		font-size: 22px;
	}
	&:disabled {
		background-color: #DA2037;
		i {
			color: ${Color.Red};
		}
	}
`

export default Button;