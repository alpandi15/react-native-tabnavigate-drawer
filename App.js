import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
// import TabNavigator from './src/navigation/TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './src/screens/splash';

const navOptionHandler = () => ({
  headerShown: false,
});
const StackApp = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Loading">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Loading"
          component={LoadingScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};
export default App;
