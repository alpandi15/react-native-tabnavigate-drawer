import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStack, VariasiStack} from './StackNavigator';
import CustomDrawer from '../components/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => CustomDrawer(props)}
      drawerContentOptions={{
        activeBackgroundColor: '#fb770d',
        activeTintColor: '#ffffff',
      }}>
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Variasi" component={VariasiStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
