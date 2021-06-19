import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MainStackNavigator,
  ContactStackNavigator,
  VariasiStackNavigator,
} from './StackNavigator';
import {SvgCss} from 'react-native-svg';
import IconHome from '../static/icons/IconHome';
import IconMenu from '../static/icons/IconMenu';
import IconDocument from '../static/icons/IconDocument';
import IconProfile from '../static/icons/IconProfile';
import Beranda from '../screens/Beranda';
import Menu from '../screens/Menu';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}} key={state.key}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
            }}>
            <View>
              {label === 'Beranda' ? (
                <SvgCss xml={IconHome} width={30} height={30} />
              ) : label === 'Menu' ? (
                <SvgCss xml={IconMenu} width={30} height={30} />
              ) : label === 'Orders' ? (
                <SvgCss xml={IconDocument} width={30} height={30} />
              ) : (
                <SvgCss xml={IconProfile} width={30} height={30} />
              )}
            </View>
            <Text style={{color: isFocused ? '#fb770d' : '#a5a6a9'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Beranda" component={Beranda} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
