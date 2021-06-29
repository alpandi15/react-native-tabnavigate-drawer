import * as React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import OneSignal from 'react-native-onesignal';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyB1ihAFT2i8BFEyJmmy5NT0t5RzviKgwpQ',
  projectId: 'push-notification-3ea6d',
  // authDomain: 'fir-demo-e2751.firebaseapp.com',
  // databaseURL: 'https://fir-demo-e2751.firebaseio.com',
  // storageBucket: 'fir-demo-e2751.appspot.com',
  messagingSenderId: '346836254967',
  appId: '1:346836254967:android:cbf99cda47611afe2e53f2',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Setup = () => {
  const onReceived = notification => {
    console.log('Notification received: ', notification);
  };
  const onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };
  const onIds = device => {
    console.log('Device info: ', device);
  };
  const messageClick = device => {
    console.log('Device info: ', device);
  };
  React.useEffect(async () => {
    OneSignal.setLogLevel(6, 0)
    OneSignal.enableVibrate(true);
    OneSignal.enableSound(true);
    OneSignal.init('e5a57834-9df8-445a-bc01-623f3279b3c8', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    OneSignal.addEventListener('inAppMessageClicked', messageClick);

    OneSignal.getPermissionSubscriptionState(state => {
      console.log('SUBSCRIBE ', state)
    })
    // OneSignal.setSubscription(true)
  }, [])

  return <App />
}

export default Setup
