import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Switch} from 'react-native-elements';
import Header from '../../components/header';
import {grayColor} from '../../constant';
import ListOrder from './ListOrder';

const Beranda = ({navigation}) => {
  return (
    <SafeAreaView style={styles.component}>
      <Header title="Home" isHome={true} navigation={navigation} />
      <ScrollView>
        <View style={styles?.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.textHalo}>Halo</Text>
              <Text style={styles.textName}>Iqbal Adam</Text>
            </View>
            <View>
              <Text style={styles.textOpenStand}>Buka Stand</Text>
              <Switch
                // onChange={onSwitchNnotification}
                // value={active}
                color="#fb770d"
              />
            </View>
          </View>
          <ListOrder />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    padding: 15,
  },
  textHalo: {
    fontSize: 18,
    color: grayColor,
  },
  textName: {
    fontSize: 22,
    color: grayColor,
    fontWeight: 'bold',
  },
  textOpenStand: {
    fontSize: 10,
    color: grayColor,
    fontWeight: '600',
  },
});

export default Beranda;
