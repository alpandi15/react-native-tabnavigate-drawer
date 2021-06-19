import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';

const CustomHeader = ({isHome, navigation}) => {
  return (
    <Wrapper>
      {isHome ? (
        <Content>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../static/icons/Menu.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../static/icons/Notif.png')} />
          </TouchableOpacity>
        </Content>
      ) : (
        <Content>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
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
