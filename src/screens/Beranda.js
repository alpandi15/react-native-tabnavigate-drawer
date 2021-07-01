import React from 'react';
import {View, Button, Text, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/header';
const Beranda = ({navigation}) => {
  return (
    <SafeAreaView style={styles.component}>
      <Header title="Home" isHome={true} navigation={navigation} />
      <View style={styles?.content}>
        <View>
          <Text>This is the home screen</Text>
          <Button
            title="Go to About Screen"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
  },
  content: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Beranda;
