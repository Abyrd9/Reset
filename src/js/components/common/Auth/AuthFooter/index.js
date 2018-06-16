import styled from 'styled-components';

import Divider from './Divider';
import SocialButton from './SocialButton';
import ToggleLink from './ToggleLink';

const AuthFooter = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

AuthFooter.Divider = Divider;
AuthFooter.SocialButton = SocialButton;
AuthFooter.ToggleLink = ToggleLink;

export default AuthFooter;