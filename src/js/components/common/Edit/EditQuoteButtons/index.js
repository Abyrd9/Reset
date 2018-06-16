import styled from 'styled-components';

import Button from './Button';

const EditQuoteButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
`

EditQuoteButtons.Button = Button;

export default EditQuoteButtons;