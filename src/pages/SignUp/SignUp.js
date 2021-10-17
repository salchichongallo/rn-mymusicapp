import React from 'react';
import {StatusBar, View} from 'react-native';
import Button from '../../components/Button';
import Background from '../../components/Background';
import Center from '../../components/Center';
import Logo from '../../components/Logo';
import Field from '../../components/Field';
import Input from '../../components/Input';
import {styles, Title} from './SignUp.styles';

function SignUp({navigation}) {
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
          <Button onPress={() => navigation.navigate('Home')}>Register</Button>
          <Button
            secondary
            onPress={() => navigation.navigate('SignIn')}
            style={styles.actionButton}>
            Login
          </Button>
        </View>
      </Center>
    </Background>
  );
}

export default SignUp;
