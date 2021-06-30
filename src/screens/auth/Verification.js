import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Image} from 'react-native-elements';
import {useForm} from 'react-hook-form';
import OneSignal from 'react-native-onesignal'
import InputField from '../../components/form/Input';
import {apiLogin} from '../../services/auth';
import {setUserToken} from '../../utils/storage';
import Toast from '../../components/toast/ToastAndroid';
import {apiGetProfile} from '../../services/profile';
import {apiUpdatePlayerId} from '../../services/playerId';
import {set} from '../../utils/storage';
import {primaryColor} from '../../constant';
import Countdown from '../../components/Countdown';
import { Alert } from 'react-native';

const Verification = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();
  const onSubmit = async values => {
    console.log('VALUES ', values);
    navigation.navigate('ResetPassword', {email: values?.email})
  };

  const onRemoveTimer = React.useCallback(async () => {
    Alert.alert('Timeoff')
  }, [])

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.title}>Verification Code</Text>
        </View>
        <Image
          source={require('../../static/images/mail_sent.png')}
          style={styles.image}
          containerStyle={styles.imageWrapper}
        />
      </View>

      <View style={styles.formContent}>
        <View style={styles.inputControl}>
          <Text style={styles.subTitle}>
            Silahkan masukkan kode verifikasi yang telah dikirimkan ke email kamu, jangan lupa juga melihat folder spam
          </Text>
          <InputField
            name="code"
            control={control}
            placeholder="Verification Code"
            validation={{
              required: '*Required'
            }}
            error={errors?.code}
          />
          <View style={styles.wrapperTime}>
            <Text style={styles.textCowndown}>Sisa Waktu: </Text>
            <Countdown timeTillDate={new Date('Wed Jun 30 2021 10:50:00 GMT+0700')} timeOut={onRemoveTimer} />
          </View>
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
  subTitle: {margin: 10, color: '#000000', lineHeight: 20},
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
  wrapperTime: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Verification;
