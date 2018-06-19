import styled from 'styled-components';

import Button from './Button';
import ForgotPassword from './ForgotPassword';
import AuthInput from './AuthInput';

const AuthForm = styled.div`
	width: 100%;
	max-width: 500px;
	min-height: 280px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 320px) {
		margin-bottom: 0;
	}
`

AuthForm.Button = Button;
AuthForm.ForgotPassword = ForgotPassword;
AuthForm.AuthInput = AuthInput;

export default AuthForm;