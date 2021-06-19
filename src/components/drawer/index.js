import React from 'react';
import {ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import styled from 'styled-components/native';

const CustomDrawerContent = props => {
  return (
    <Wrapper>
      <SideHeader>
        <ImageStyle source={require('../../static/icons/icon-app.png')} />
        <TextLogo>Hooela</TextLogo>
      </SideHeader>
      <ScrollMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Home')}>
          <ImageStyle source={require('../../static/icons/Report.png')} />
          <Text>Home</Text>
        </TouchMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Variasi')}>
          <ImageStyle source={require('../../static/icons/Payment.png')} />
          <Text>Metode Pembayaran</Text>
        </TouchMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Home')}>
          <ImageStyle source={require('../../static/icons/voucher.png')} />
          <Text>Voucher</Text>
        </TouchMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Home')}>
          <ImageStyle source={require('../../static/icons/Report.png')} />
          <Text>Diskon</Text>
        </TouchMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Home')}>
          <ImageStyle source={require('../../static/icons/Review.png')} />
          <Text>Tanggapan</Text>
        </TouchMenu>
        <TouchMenu onPress={() => props.navigation.navigate('Home')}>
          <ImageStyle source={require('../../static/icons/Report.png')} />
          <Text>Laporan</Text>
        </TouchMenu>
      </ScrollMenu>
    </Wrapper>
  );
};

export default CustomDrawerContent;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;
const SideHeader = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: #fb770d;
  padding: 16px;
`;
const ImageStyle = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
const TextLogo = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0.3px;
`;
const ScrollMenu = styled.ScrollView`
  padding-top: 16px;
`;
const TouchMenu = styled.TouchableOpacity`
  padding: 10px 16px;
  flex-direction: row;
  align-items: center;
`;
