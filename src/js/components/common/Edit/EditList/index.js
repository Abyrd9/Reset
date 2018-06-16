import styled from 'styled-components';

import ListContainer from './ListContainer';

const EditList = styled.div`
	flex: auto;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
`

EditList.ListContainer = ListContainer;

export default EditList;