import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Header from '../../components/header';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Notification" isHome={false} navigation={navigation} />
      <View style={styles.center}>
        <Text>This is the Notification screen</Text>
      </View>
    </SafeAreaView>
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

export default Notification;
