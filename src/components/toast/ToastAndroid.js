import {ToastAndroid} from 'react-native';

const Toast = ({message}) => {
  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    0,
    50,
  );
};

export default Toast;
