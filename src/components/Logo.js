import {Image} from 'react-native';
import styled from 'styled-components/native';

const Logo = styled(Image).attrs({
  source: require('../assets/spotify-logo.png'),
  resizeMode: 'contain',
  fadeDuration: 0,
})`
  max-height: 70px;
  align-self: center;
`;

export default Logo;
