import React from 'react';
import {StatusBar, View} from 'react-native';
import Button from '../../components/Button';
import Background from '../../components/Background';
import Center from '../../components/Center';
import Logo from '../../components/Logo';
import Field from '../../components/Field';
import Input from '../../components/Input';
import {styles, Title} from './SignUp.styles';

function SignUp({onSignIn}) {
  return (
    <Background>
      <StatusBar barStyle="light-content" />
      <Center>
        <View style={styles.container}>
          <Logo />
          <Title>Register</Title>
          <Field label="Username" style={styles.field}>
            <Input placeholder="Your Username" />
          </Field>
          <Field label="Password" style={styles.field}>
            <Input secureTextEntry placeholder="Your Password" />
          </Field>
          <Button>Register</Button>
          <Button secondary onPress={onSignIn} style={styles.actionButton}>
            Login
          </Button>
        </View>
      </Center>
    </Background>
  );
}

export default SignUp;
