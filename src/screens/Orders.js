import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const Orders = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the order screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
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

export default Orders;
