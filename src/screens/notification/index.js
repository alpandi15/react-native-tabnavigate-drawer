import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {Switch} from 'react-native-elements';
import Header from '../../components/header';
import OneSignal from 'react-native-onesignal';

const Notification = ({navigation}) => {
  const [active, setActive] = useState(false);
  React.useEffect(() => {
    OneSignal.getPermissionSubscriptionState(state => {
      if (state?.subscriptionEnabled) {
        setActive(true);
      } else {
        setActive(false);
      }
      console.log('State ', state?.subscriptionEnabled);
    });
  }, []);
  const onSwitchNnotification = async () => {
    OneSignal.setSubscription(!active);
    setActive(!active);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title="Notification"
        isHome={false}
        navigation={navigation}
        rightComponent={() => (
          <View>
            <Switch
              onChange={onSwitchNnotification}
              value={active}
              color="#fb770d"
            />
          </View>
        )}
      />
      <View style={styles.center}>
        <Text>This is the Notification screen</Text>
      </View>
    </SafeAreaView>
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

export default Notification;
