import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeApp');
    }, 1000);
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
