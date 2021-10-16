import styled from 'styled-components/native';
import Text from '../../components/Text';
import {StyleSheet} from 'react-native';

export const Title = styled(Text)`
  font-size: 24px;
`;

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingTop: 14,
    paddingRight: 12,
    paddingLeft: 20,
  },
  icon: {
    width: 48,
    height: 48,
  },
  subHeader: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 32,
  },
  songsSection: {
    paddingLeft: 20,
    paddingRight: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.37)',
    marginBottom: 20,
  },
});
