import styled from 'styled-components';

import Icon from './Icon';
import Text from './Text';
import Button from './Button';
import QuoteContainer from './QuoteContainer';
import ButtonCountdown from './ButtonCountdown';

const QuotesBlock = styled.div`
	width: 100%;
	max-width: 500px;
	position: relative;
	flex: auto;
  display: flex;
  flex-direction: column;
	justify-content: center;
	@media (min-width: 760px) {
		margin-top: 100px;
	}
`

QuotesBlock.Icon = Icon;
QuotesBlock.Text = Text;
QuotesBlock.Button = Button;
QuotesBlock.QuoteContainer = QuoteContainer;
QuotesBlock.ButtonCountdown = ButtonCountdown;

export default QuotesBlock;