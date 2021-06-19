import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Halaman Profile</Text>
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

export default Profile;
