import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  inputStyle: {
    fontSize: 14,
  },
  errorWrapper: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  textError: {
    color: 'red',
    fontSize: 12,
  },
});

export default styles;
