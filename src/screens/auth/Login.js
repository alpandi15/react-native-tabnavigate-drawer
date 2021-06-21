import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text>Masuk ke Akun Stand Kamu</Text>
        <Text>
          Gunakan akun stand yang telah di daftarkan oleh admin foodcourt
        </Text>
      </View>
      <View style={styles.center}>
        <Text>LOGIN</Text>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          padding: 10,
          bottom: 0,
          position: 'absolute',
          width: '100%',
          flex: 1,
          alignItems: 'center'
        }}>
        <Button title="Masuk" style={{ width: '100%' }}/>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text>Lupa Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Login;
