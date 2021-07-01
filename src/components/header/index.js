import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {SvgCss} from 'react-native-svg';
import MenuIcon from '../../static/icons/Menu';
import NotifIcon from '../../static/icons/Notif';
import ArrowBackIcon from '../../static/icons/Back';

const CustomHeader = ({isHome, title, navigation, rightComponent}) => {
  return (
    <Wrapper>
      {isHome ? (
        <Content>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <SvgCss xml={MenuIcon} width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Notification')}>
            <SvgCss xml={NotifIcon} width={30} height={30} />
          </TouchableOpacity>
        </Content>
      ) : (
        <Content>
          <BackButtonView>
            <ButtonBack onPress={() => navigation.goBack()}>
              <SvgCss xml={ArrowBackIcon} width={40} height={40} />
            </ButtonBack>
            {title && <TextTitle>{title}</TextTitle>}
          </BackButtonView>
          {rightComponent ? rightComponent() : null}
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
`;
const ButtonBack = styled.TouchableOpacity`
  margin-right: 10px;
`;
const TextTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
