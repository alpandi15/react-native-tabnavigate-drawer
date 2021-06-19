import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStack, VariasiStack} from './StackNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Variasi')}>
          <Text>Variasi</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Variasi" component={VariasiStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
