import {View} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

export const Label = styled(Text)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin-bottom: 12px;
`;

export const ErrorMessage = styled(Text)`
  font-size: 14px;
  color: #fa2f31;
  font-family: 'Poppins-Regular';
`;

export const StyledView = styled(View)`
  min-height: 105px;
`;
