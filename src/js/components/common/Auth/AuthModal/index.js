import styled from 'styled-components';

import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import Text from './Text';

const Auth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Auth.Button = Button;
Auth.Icon = Icon;
Auth.Input = Input;
Auth.Text = Text;

export default Auth;