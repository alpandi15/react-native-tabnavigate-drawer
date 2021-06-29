import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import OneSignal from 'react-native-onesignal';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
// import TabNavigator from './src/navigation/TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import LoadingScreen from './src/screens/splash';
import {LoginStack} from './src/navigation/StackNavigator';
import {AppProvider} from './src/context/AppContext';

const navOptionHandler = () => ({
  headerShown: false,
});
const StackApp = createStackNavigator();
const App = () => {
  useEffect(() => {
    (async () => {
      // await initOneSignal();
    })()
  }, []);

  async function initOneSignal() {
    try {
      OneSignal.setLogLevel(6, 0);
      OneSignal.setAppId('e5a57834-9df8-445a-bc01-623f3279b3c8');
      OneSignal.setRequiresUserPrivacyConsent(true);

      // iphone support
      // OneSignal.promptForPushNotificationsWithUserResponse(response => {
      //   console.log('Prompt response:', response);
      // });

      /* O N E S I G N A L  H A N D L E R S */

      OneSignal.setNotificationWillShowInForegroundHandler(
        notifReceivedEvent => {
          console.log(
            'OneSignal: notification will show in foreground:',
            notifReceivedEvent,
          );
          let notif = notifReceivedEvent.getNotification();

          const button1 = {
            text: 'Cancel',
            onPress: () => {
              notifReceivedEvent.complete();
            },
            style: 'cancel',
          };

          const button2 = {
            text: 'Complete',
            onPress: () => {
              notifReceivedEvent.complete(notif);
            },
          };

          Alert.alert('Complete notification?', 'Test', [button1, button2], {
            cancelable: true,
          });
        },
      );
      OneSignal.setNotificationOpenedHandler(notification => {
        console.log('OneSignal: notification opened:', notification);
      });
      OneSignal.setInAppMessageClickHandler(event => {
        console.log('OneSignal IAM clicked:', event);
      });
      OneSignal.addEmailSubscriptionObserver(event => {
        console.log('OneSignal: email subscription changed: ', event);
      });
      OneSignal.addSubscriptionObserver(event => {
        console.log('OneSignal: subscription changed:', event);
        // this.setState({isSubscribed: event.to.isSubscribed});
      });
      OneSignal.addPermissionObserver(event => {
        console.log('OneSignal: permission changed:', event);
      });

      const deviceState = await OneSignal.getDeviceState();

      console.log('Device State ', deviceState);
    } catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackApp.Navigator initialRouteName="Loading">
            <StackApp.Screen
              name="HomeApp"
              component={DrawerNavigator}
              options={navOptionHandler}
            />
            <StackApp.Screen
              name="Loading"
              component={LoadingScreen}
              options={navOptionHandler}
            />
            <StackApp.Screen
              name="LoginStack"
              component={LoginStack}
              options={navOptionHandler}
            />
          </StackApp.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};
export default App;
