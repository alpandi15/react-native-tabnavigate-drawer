import React from 'react';
import {Controller} from 'react-hook-form';
import {Input} from 'react-native-elements';
import {View, Text} from 'react-native';
import styles from './style';

const InputField = ({
  name,
  placeholder,
  control,
  error,
  validation,
  ...props
}) => {
  console.log('STAU ', error);
  return (
    <View style={styles.wrapper}>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder={placeholder}
            onChangeText={onChange}
            style={styles.inputStyle}
            onBlur={onBlur}
            value={value}
            {...props}
          />
        )}
      />
      <View style={styles.errorWrapper}>
        {error && <Text style={styles.textError}>{error?.message}</Text>}
      </View>
    </View>
  );
};

export default InputField;
