import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {StatusBar, View} from 'react-native';

import {useAuth} from '../../auth';

import Button from '../../components/Button';
import Background from '../../components/Background';
import Center from '../../components/Center';
import Logo from '../../components/Logo';
import Field from '../../components/Field';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import {styles, Title} from './SignUp.styles';

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too large!')
    .required('Required!'),
  password: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too large!')
    .required('Required!'),
});

function SignUp({navigation}) {
  const {onAuth} = useAuth();
  const handleSubmit = ({username}) => {
    onAuth({username});
    navigation.navigate('Home');
  };
  return (
    <Background>
      <StatusBar barStyle="light-content" />
      <Center>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{username: '', password: ''}}
          validationSchema={registerSchema}>
          <View style={styles.container}>
            <Logo />
            <Title>Register</Title>
            <Field name="username" label="Username" style={styles.field}>
              <Input placeholder="Your Username" />
            </Field>
            <Field name="password" label="Password" style={styles.field}>
              <Input secureTextEntry placeholder="Your Password" />
            </Field>
            <SubmitButton>Register</SubmitButton>
            <Button
              secondary
              onPress={() => navigation.navigate('SignIn')}
              style={styles.actionButton}>
              Login
            </Button>
          </View>
        </Formik>
      </Center>
    </Background>
  );
}

export default SignUp;
