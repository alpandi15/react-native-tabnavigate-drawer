import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Variasi from '../screens/Variasi';
import ForgotPassword from '../screens/auth/ForgotPassword';
import LoginScreen from '../screens/auth/Login';
import Notification from '../screens/notification';
import Verification from '../screens/auth/Verification';
import ResetPassword from '../screens/auth/ResetPassword';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#fb770d',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const navOptionHandler = () => ({
  headerShown: false,
});

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

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={navOptionHandler}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Notification" component={Notification} options={navOptionHandler} />
    </Stack.Navigator>
  );
};

export {LoginStack, MainStack, ContactStack, VariasiStack};
