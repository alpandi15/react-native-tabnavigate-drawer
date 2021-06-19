import React from 'react';
import {View, Button, Text} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Halaman Profile</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Profile;
