import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStack, VariasiStack} from './StackNavigator';
import CustomDrawer from '../components/drawer';
import {useAppContext} from '../context/useAppContext';
import {apiGetProfile} from '../services/profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {dispatch} = useAppContext();
  useEffect(() => {
    (async () => {
      const res = await apiGetProfile();
      if (res?.success) {
        dispatch({
          type: 'IS_LOGGED',
          payload: {
            isAuth: true,
            user: res?.data,
          },
        });
      }
      // console.log('RESPONSE ME ', res);
    })();
  }, [dispatch]);

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
