import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Variasi from '../screens/Variasi';
import SplashScreen from '../screens/splash';
import LoginScreen from '../screens/auth/Login';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#fb770d',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const ContactStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="Contact">
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const VariasiStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Variasi" component={Variasi} />
    </Stack.Navigator>
  );
};

const LoadingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const navOptionHandler = () => ({
  headerShown: false,
});
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={navOptionHandler}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export {LoadingStack, LoginStack, MainStack, ContactStack, VariasiStack};
