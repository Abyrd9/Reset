import styled from 'styled-components';

const Backdrop = styled.div`
	height: calc(100vh - 80px);
	width: 100vw;
	overflow: hidden;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: ${props => {
		if (props.auth) return 'space-evenly';
		if (props.quotes) return 'space-between';
	}};
	align-items: center;
	@media (min-width: 760px) {
		height: 100vh;
		justify-content: flex-start;
	}
`

export default Backdrop;