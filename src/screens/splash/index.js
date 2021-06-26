import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getUserToken} from '../../utils/storage';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    (async () => {
      const token = await getUserToken();
      console.log('TOKEN ', token);
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
      <Text>Loading....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default SplashScreen;
