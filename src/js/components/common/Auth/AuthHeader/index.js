import styled from 'styled-components';

import Image from './Image';
import Title from './Title';

const AuthHeader = styled.div`
	width: 100%;
	max-height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

AuthHeader.Image = Image;
AuthHeader.Title = Title;

export default AuthHeader;