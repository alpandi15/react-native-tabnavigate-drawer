import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Header from '../components/header';

const Beranda = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Home" isHome={true} navigation={navigation} />
      <View
        style={{
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Beranda;
