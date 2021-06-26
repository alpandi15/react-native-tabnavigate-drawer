import React from 'react';
import {Icon, Image} from 'react-native-elements';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import {removeUserToken} from '../../utils/storage';
import {useAppContext} from '../../context/useAppContext';
const styles = {
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 16,
  },
};

const CustomDrawerContent = props => {
  return (
    <Wrapper>
      <SideHeader>
        <ImageStyle source={require('../../static/icons/icon-app.png')} />
        <TextLogo>Hooela</TextLogo>
      </SideHeader>
      <ScrollMenu>
        <ScrollView>
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
        </ScrollView>
      </ScrollMenu>
      <UserProfile navigation={props?.navigation} />
    </Wrapper>
  );
};

export default CustomDrawerContent;

const UserProfile = ({navigation}) => {
  const {state} = useAppContext();

  const logout = async () => {
    await removeUserToken();
    navigation?.replace('LoginStack');
  };

  return (
    <UserWrapper>
      <Image
        source={{
          uri: state?.userAuth?.user?.image?.url,
        }}
        style={styles?.userImage}
      />
      <UserContent>
        <TextName>{state?.userAuth?.user?.name}</TextName>
        <ButtonLogout onPress={logout}>
          <TextLogout>Keluar</TextLogout>
          <Icon size={20} type="material" name="logout" color="#fb770d" />
        </ButtonLogout>
      </UserContent>
    </UserWrapper>
  );
};
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
const ScrollMenu = styled.View`
  padding-vertical: 10px;
  overflow: hidden;
  height: 70%;
`;
const TouchMenu = styled.TouchableOpacity`
  padding: 10px 16px;
  flex-direction: row;
  align-items: center;
`;
const UserWrapper = styled.View`
  flex-direction: row;
  padding: 24px;
`;
const UserContent = styled.View`
  flex-direction: column;
  justify-content: center;
`;
const TextName = styled.Text`
  font-weight: bold;
  letter-spacing: 0.3px;
  padding-bottom: 2px;
`;
const ButtonLogout = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const TextLogout = styled.Text`
  margin-right: 10px;
  color: #fb770d;
  font-weight: bold;
`;
