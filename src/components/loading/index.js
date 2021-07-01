import React from 'react';
import {ActivityIndicator, Platform, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import {primaryColor} from '../../constant';

const OverlayLoading = ({visible = false}) => {
  return (
    <Overlay overlayStyle={styles.overlay} isVisible={visible}>
      <ActivityIndicator
        size={Platform.OS === 'ios' ? 'large' : 50}
        color={primaryColor}
      />
    </Overlay>
  );
};

export default OverlayLoading;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
});
