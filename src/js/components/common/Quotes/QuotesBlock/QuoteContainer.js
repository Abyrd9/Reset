import styled from 'styled-components';

const quoteAnimation = (delay) => {
	return `transition: transform .5s cubic-bezier(0.325, 0.005, 0.560, 1.000) ${delay}, opacity .5s cubic-bezier(0.325, 0.005, 0.560, 1.000) ${delay};`
}

const QuoteContainer = styled.div`
	width: 100%;
	position: relative;
	i:nth-child(1) {
		transform: translateY(0);
		opacity: 1;
		${quoteAnimation('.08s')}
	}
	i:nth-child(2) {
		transform: translateY(0);
		opacity: 1;
		${quoteAnimation('.04s')}
	}
	p {
		transform: translateY(0);
		opacity: 1;
		${quoteAnimation('0s')}
	}
	${props => {
		if (props.isTransition) {
			return `
			i:nth-child(1) {
				transform: translateY(-30px);
				opacity: 0;
				${quoteAnimation('.08s')}
			}
			i:nth-child(2) {
				transform: translateY(-30px);
				opacity: 0;
				${quoteAnimation('.04s')}
			}
			p {
				transform: translateY(-30px);
				opacity: 0;
				${quoteAnimation('0s')}
			}
			`
		}
	}}
`

export default QuoteContainer;