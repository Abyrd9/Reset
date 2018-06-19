import styled from 'styled-components';

const ListContainer = styled.div`
	overflow-y: scroll;
	flex: auto;
	width: 100%;
	@media (min-width: 760px) {
		max-width: 700px;
		margin-bottom: 20px;
	}
`

export default ListContainer;