import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home/Home';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';

const {Navigator, Screen} = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
