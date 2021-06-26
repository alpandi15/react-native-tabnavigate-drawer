import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserToken = async () => {
  try {
    let data = await AsyncStorage.getItem('userToken');
    const parsed = JSON.parse(data) || null;
    return parsed;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};

const setUserToken = async token => {
  try {
    let data = await AsyncStorage.setItem('userToken', token);
    const parsed = JSON.parse(data) || null;
    return parsed;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};

const removeUserToken = async () => {
  try {
    let removed = await AsyncStorage.removeItem('userToken');
    return removed;
  } catch (error) {
    console.log('Error :>> ', error);
  }
};

const get = async key => {
  let data = [];
  try {
    data = await AsyncStorage.getItem(key);
    return data;
  } catch (error) {
    console.log('Storage Failed:', error);
  }
};

const set = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.log('Storage Failed:', error);
  }
};

const remove = async key => {
  try {
    const removeProgress = await AsyncStorage.removeItem(key);
    return removeProgress;
  } catch (error) {
    console.log('Storage Failed:', error);
  }
};

export {getUserToken, setUserToken, removeUserToken, get, set, remove};
