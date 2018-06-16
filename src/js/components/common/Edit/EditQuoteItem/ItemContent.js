import styled from 'styled-components';
import { Font, Color } from '../../Mixins';

const ItemContent = styled.div`
		${Font(500, '18px')}
    color: ${Color.Black};
    flex: 1;
		margin: 0 15px;
` 

export default ItemContent;