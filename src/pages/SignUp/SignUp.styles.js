import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Title = styled(Text)`
  font-size: 32px;
  margin-top: 32px;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
`;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
  },
  field: {
    marginBottom: 24,
  },
  actionButton: {
    marginTop: 16,
  },
});
