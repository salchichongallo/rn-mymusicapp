import {TextInput} from 'react-native';
import styled from 'styled-components/native';

const Input = styled(TextInput).attrs({
  selectionColor: '#1db954',
  placeholderTextColor: 'rgba(255, 255, 255, 0.4)',
})`
  background: rgba(255, 255, 255, 0.16);
  width: 100%;
  border-radius: 6px;
  height: 58px;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.2px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: 'Poppins-Regular';
`;

export default Input;
