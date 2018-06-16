import styled from 'styled-components';

import Icon from './Icon';
import Text from './Text';
import Button from './Button';
import { Depth } from '../../Mixins';

const QuotesBlock = styled.div`
	width: 100%;
	position: relative;
`

QuotesBlock.Icon = Icon;
QuotesBlock.Text = Text;
QuotesBlock.Button = Button;

export default QuotesBlock;