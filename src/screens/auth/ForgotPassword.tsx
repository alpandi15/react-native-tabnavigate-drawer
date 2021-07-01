import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Image} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import OneSignal from 'react-native-onesignal'
import InputField from '../../components/form/Input';
import {apiLogin} from '../../services/auth';
import {setUserToken} from '../../utils/storage';
import Toast from '../../components/toast/ToastAndroid';
import {apiGetProfile} from '../../services/profile';
import {apiForgotPassword} from '../../services/forgotPassword';
import {set} from '../../utils/storage';
import {PLAYERID, STORAGE_FORGOTTIME} from '../../constant';
import Header from '../../components/header/AuthHeader';
import moment from 'moment';
import Loading from '../../components/loading';

const ForgotPassword = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();
  const onSubmit = async values => {
    console.log('VALUES ', values);
    // console.log('MOMENT ', moment('2021-07-01 12:20:00', 'YYYY-MM-DD HH:mm:ss').add({ hours: 7 }).toString())
    const result = await apiForgotPassword('email', { account: values?.email, roleId: 4 })
    console.log('RES FORGOT ', result, moment(result?.data?.expired, 'YYYY-MM-DD HH:mm:ss').add({ hours: 7 }).toString())
    if (result.success) {
      set(STORAGE_FORGOTTIME, moment(result?.data?.expired, 'YYYY-MM-DD HH:mm:ss').add({ hours: 7 }).toString())
      Toast({
        message: result?.meta?.message,
      });
      navigation.navigate('Verification', {email: values?.email})
      return
    } else if (typeof result.detail === 'object') {
      Toast({
        message: result?.message,
      });
      navigation.navigate('Verification', {email: values?.email})
    }
    Toast({
      message: result?.message,
    });
    // navigation.navigate('Verification', {email: values?.email})
    return
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.textContent}>
            <Text style={styles.title}>Lupa Password</Text>
            <Text style={styles.subTitle}>
              Masukkan alamat email terdaftar kamu, kami akan mengirimkan link untuk mereset kata sandi
            </Text>
          </View>
          <Image
            source={require('../../static/images/lock.png')}
            style={styles.image}
            containerStyle={styles.imageWrapper}
          />
        </View>

        <View style={styles.formContent}>
          <View style={styles.inputControl}>
            <InputField
              name="email"
              control={control}
              placeholder="Email"
              validation={{
                required: '*Email Required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: 'Use email format'
                }
              }}
              error={errors?.email}
            />
          </View>
          <View style={styles.buttonContent}>
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Kirim"
              loading={isSubmitting}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonTitle}
              disabled={isSubmitting}
            />
          </View>
        </View>
      </View>
      <Loading visible={isSubmitting} />
    </SafeAreaView>
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
    paddingBottom: 30
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

export default ForgotPassword;
