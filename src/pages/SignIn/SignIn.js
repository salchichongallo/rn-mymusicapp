import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {StatusBar, View} from 'react-native';

import Button from '../../components/Button';
import Background from '../../components/Background';
import Center from '../../components/Center';
import Logo from '../../components/Logo';
import Field from '../../components/Field';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {styles} from './SignIn.styles';

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too large!')
    .required('Required!'),
  password: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too large!')
    .required('Required!'),
});

function SignIn({onSubmit, navigation}) {
  return (
    <Background>
      <StatusBar barStyle="light-content" />
      <Center>
        <Formik
          onSubmit={onSubmit}
          validationSchema={loginSchema}
          initialValues={{username: '', password: ''}}>
          <View style={styles.container}>
            <View>
              <Logo />
            </View>
            <Field name="username" label="Username" style={styles.field}>
              <Input placeholder="Your Username" />
            </Field>
            <Field name="password" label="Password" style={styles.field}>
              <Input secureTextEntry placeholder="Your Password" />
            </Field>
            <SubmitButton>Login</SubmitButton>
            <Button
              onPress={() => navigation.navigate('SignUp')}
              secondary
              style={styles.actionButton}>
              Register
            </Button>
          </View>
        </Formik>
      </Center>
    </Background>
  );
}

export default SignIn;
