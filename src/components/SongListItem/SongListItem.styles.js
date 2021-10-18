import styled from 'styled-components/native';
import {Image, StyleSheet} from 'react-native';
import Text from '../Text';

export const Thumbnail = styled(Image)`
  width: 51px;
  height: 51px;
`;

export const TrackName = styled(Text)`
  font-size: 18px;
  color: #fff;
`;

export const Artist = styled(Text)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const styles = StyleSheet.create({
  container: {
    height: 71,
    width: '100%',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
});
