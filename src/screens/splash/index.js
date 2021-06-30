import React from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {getUserToken} from '../../utils/storage';
import OneSignal from 'react-native-onesignal';
import {set} from '../../utils/storage';
import {PLAYERID, primaryColor} from '../../constant';
import Logo from '../../static/icons/logo.js'

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    (async () => {
      const token = await getUserToken();
      await OneSignal.getPermissionSubscriptionState(async state => {
        if (state?.userId) {
          await set(PLAYERID, state?.userId)
        }
      })
      // console.log('TOKEN ', token);
      if (token) {
        navigation.replace('HomeApp');
      } else {
        navigation.replace('LoginStack');
      }
    })();
    // setTimeout(() => {
    // }, 800);
  }, [navigation]);

  return (
    <View style={styles.center}>
      <SvgCss width="80" height="80" xml={Logo} />
      <Text>Hooela</Text>
      <View style={styles.loading}>
        <ActivityIndicator color={primaryColor} size="small"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  loading: {
    position: 'absolute',
    bottom: 20
  }
});

export default SplashScreen;
