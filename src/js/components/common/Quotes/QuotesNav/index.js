import styled from 'styled-components';

import Image from './Image';
import Icon from './Icon';
import Menu from './Menu';

const QuotesNav = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`

QuotesNav.Icon = Icon;
QuotesNav.Image = Image;
QuotesNav.Menu = Menu;

export default QuotesNav;