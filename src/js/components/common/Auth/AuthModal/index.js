import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: 0;
  align-items: 0;
  background-color: rgba(0, 0, 0, .3);
`

const ModalContent = styled.div`
  width: 100%;
  margin: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

ModalContainer.ModalContent = ModalContent;

export default ModalContainer;