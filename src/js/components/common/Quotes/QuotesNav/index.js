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
	@media (min-width: 768px) {
		max-width: 700px;
		position: absolute;
		top: 0;
		left: calc(50% - 350px);
		padding-top: 20px;
	}
`

QuotesNav.Icon = Icon;
QuotesNav.Image = Image;
QuotesNav.Menu = Menu;

export default QuotesNav;