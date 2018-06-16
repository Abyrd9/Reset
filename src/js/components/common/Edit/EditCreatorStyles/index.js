import styled from 'styled-components';

import Button from './Button';
import { Color } from '../../Mixins';

const EditCreatorStyles = styled.div`
		width: 100%;
    border-top: 2px #d7dadb solid;
    position: relative;
`

EditCreatorStyles.Button = Button;

export default EditCreatorStyles;