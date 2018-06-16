import styled from 'styled-components';

import Icon from './Icon';
import Input from './Input';
import Label from './Label';
import Placeholder from './Placeholder';
import { Color } from '../../../Mixins';

const AuthInput_Styled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 5px 8px;
	border-bottom: solid 1px ${Color.Gray};
	margin: 10px 0px;
`

AuthInput_Styled.Icon = Icon;
AuthInput_Styled.Input = Input;
AuthInput_Styled.Label = Label;
AuthInput_Styled.Placeholder = Placeholder;

export default AuthInput_Styled;