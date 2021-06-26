import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
// import TabNavigator from './src/navigation/TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './src/screens/splash';
import {LoginStack} from './src/navigation/StackNavigator';
import {AppProvider} from './src/context/AppContext';

const navOptionHandler = () => ({
  headerShown: false,
});
const StackApp = createStackNavigator();
const App = () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
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
            <StackApp.Screen
              name="LoginStack"
              component={LoginStack}
              options={navOptionHandler}
            />
          </StackApp.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};
export default App;
