import React from 'react';
import {FlatList, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/header';
import ListOrder from './ListOrder';

const Beranda = ({navigation}) => {
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
  }
  return (
    <SafeAreaView style={styles.component}>
      <Header title="Home" isHome={true} navigation={navigation} />
      <ScrollView
        scrollEventThrottle={16}
        onMomentumScrollEnd={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            console.log('Scroll end ', nativeEvent)
          }
        }}
      >
        <ListOrder />
      </ScrollView>
      {/* <FlatList
        data={DATA}
        renderItem={ListOrder}
        keyExtractor={(item) => item.id}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

export default Beranda;
