import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthProvider from './src/auth/AuthProvider';
import TrackProvider from './src/tracks/TrackProvider';

import Home from './src/pages/Home/Home';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';

const {Navigator, Screen} = createNativeStackNavigator();

LogBox.ignoreLogs([/AsyncStorage has been extracted/, /Require cycle/]);

const initialLikedTracks = [
  '224jZ4sUX7OhAuMwaxp86S',
  '06mXfvDsRZNfnsGZvX2zpb',
  '0keCRGjhQNl2Wba6nSwqgx',
];

function App() {
  return (
    <AuthProvider>
      <TrackProvider initialLikedTracks={initialLikedTracks}>
        <NavigationContainer>
          <Navigator
            initialRouteName="SignIn"
            screenOptions={{headerShown: false}}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Home" component={Home} />
          </Navigator>
        </NavigationContainer>
      </TrackProvider>
    </AuthProvider>
  );
}

export default App;
