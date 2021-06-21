import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>LOGIN</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text>Register</Text>
      </TouchableOpacity>
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

export default Login;
