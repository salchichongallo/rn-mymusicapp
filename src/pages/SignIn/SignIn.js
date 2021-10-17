import React from 'react';
import {StatusBar, View} from 'react-native';
import Button from '../../components/Button';
import Background from '../../components/Background';
import Center from '../../components/Center';
import Logo from '../../components/Logo';
import Field from '../../components/Field';
import Input from '../../components/Input';
import {styles} from './SignIn.styles';

function SignIn({navigation}) {
  return (
    <Background>
      <StatusBar barStyle="light-content" />
      <Center>
        <View style={styles.container}>
          <View>
            <Logo />
          </View>
          <Field label="Username" style={styles.field}>
            <Input placeholder="Your Username" />
          </Field>
          <Field label="Password" style={styles.field}>
            <Input secureTextEntry placeholder="Your Password" />
          </Field>
          <Button onPress={() => navigation.navigate('Home')}>Login</Button>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            secondary
            style={styles.actionButton}>
            Register
          </Button>
        </View>
      </Center>
    </Background>
  );
}

export default SignIn;
