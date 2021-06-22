import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Input, Button, Image} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';

const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>Masuk ke Akun Stand Kamu</Text>
          <Text style={styles.subTitle}>
            Gunakan akun stand yang telah di daftarkan oleh admin foodcourt
          </Text>
        </View>
        <Image
          source={require('../../static/images/login_stand.png')}
          style={styles.image}
          containerStyle={styles.imageWrapper}
        />
      </View>

      <View style={styles.formContent}>
        <View style={styles.inputControl}>
          <Controller
            name="account"
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Email / Username"
                onChangeText={onChange}
                style={styles.inputStyle}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.firstName && <Text>This is required.</Text>}
          <Input
            placeholder="Password"
            style={styles.inputStyle}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContent}>
          <Button
            onPress={handleSubmit(onSubmit)}
            title="Masuk"
            loading={false}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.forgotWrapper}>
            <Text style={styles.textForgot}>Lupa Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  content: {
    backgroundColor: '#fb770d',
    height: '100%',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContent: {
    width: '60%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0.5,
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  subTitle: {marginTop: 10, color: '#ffffff', lineHeight: 20},
  imageWrapper: {
    position: 'absolute',
    right: -70,
    top: 90,
  },
  image: {width: 260, height: 260, resizeMode: 'contain'},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: 300,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  formContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  inputControl: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 20,
  },
  buttonContent: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  buttonStyle: {
    backgroundColor: '#325d79',
    borderRadius: 10,
    height: 55,
  },
  buttonTitle: {
    fontSize: 14,
    letterSpacing: 2,
  },
  forgotWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
  },
  textForgot: {
    color: '#fb770d',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  inputStyle: {
    fontSize: 14,
  },
});

export default Login;
