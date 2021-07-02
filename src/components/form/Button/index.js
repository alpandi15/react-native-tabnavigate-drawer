import React from 'react';
import {Button} from 'react-native-elements';
import {grayColor, primaryColor, redColor} from '../../../constant';
import styles from './style';

const ButtonComponent = ({
  isSubmitting,
  onPress,
  title,
  buttonStyle,
  titleStyle,
  type = 'primary',
}) => {
  const bgColor =
    type === 'primary'
      ? primaryColor
      : type === 'secondary'
      ? grayColor
      : type === 'error'
      ? redColor
      : '';
  return (
    <Button
      onPress={onPress}
      title={title}
      loading={isSubmitting}
      buttonStyle={{
        ...buttonStyle,
        ...styles.buttonStyle,
        backgroundColor: bgColor,
      }}
      titleStyle={titleStyle || styles.buttonTitle}
      disabled={isSubmitting}
    />
  );
};

export default ButtonComponent;
