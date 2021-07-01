import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = ({navigation}) => {
  return (
    <Wrapper>
      <Content>
        <BackButtonView>
          <ButtonBack onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={25} />
          </ButtonBack>
        </BackButtonView>
      </Content>
    </Wrapper>
  );
};

export default CustomHeader;

const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  height: 50px;
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
