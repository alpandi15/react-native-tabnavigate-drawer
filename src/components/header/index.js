import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomHeader = ({isHome, title, navigation}) => {
  return (
    <Wrapper>
      {isHome ? (
        <Content>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../static/icons/Menu.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Notification')}>
            <Image source={require('../../static/icons/Notif.png')} />
          </TouchableOpacity>
        </Content>
      ) : (
        <Content>
          <BackButtonView>
            <ButtonBack onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons name="arrow-left" size={25} />
            </ButtonBack>
            {
              title && (
                <TextTitle>{title}</TextTitle>
              )
            }
          </BackButtonView>
        </Content>
      )}
    </Wrapper>
  );
};

export default CustomHeader;

const Wrapper = styled.View`
  flex-direction: row;
  height: 50px;
  background-color: #ffffff;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;
const BackButtonView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`
const ButtonBack = styled.TouchableOpacity`
  margin-right: 10px;
`
const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`