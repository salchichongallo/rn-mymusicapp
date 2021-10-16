import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const Label = styled(Text)`
  font-size: 18px;
  text-align: center;
  color: ${props => (props.secondary ? '#1eee67' : '#fff')};
`;

const Wrapper = styled(Pressable)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 58px;
  border-radius: 36px;
  background-color: ${props => (props.secondary ? 'transparent' : '#1db954')};
`;

function Button({children, onPress, style, secondary = false}) {
  return (
    <Wrapper onPress={onPress} secondary={secondary} style={style}>
      <Label secondary={secondary}>{children}</Label>
    </Wrapper>
  );
}

export default Button;
