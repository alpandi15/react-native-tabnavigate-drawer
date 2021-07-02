import React from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {primaryColor, redColor} from '../../constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonComponent from '../../components/form/Button';
const styles = StyleSheet.create({
  button: {
    height: 35,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 10,
  },
});
const ListOrder = () => {
  return (
    <Wrapper>
      <MainText>Pesanan Masuk</MainText>
      <Card>
        <Head>
          <View>
            <OrderNumber>#FCM000</OrderNumber>
            <Time>10:46 WIB</Time>
          </View>
          <CustomerTable>
            <TextMeja>Meja</TextMeja>
            <NomorMeja>Meja 01</NomorMeja>
          </CustomerTable>
        </Head>
        <Body>
          <CustomerName>Muhammad Al-Pandi</CustomerName>
          <OrderStatus>
            <IconMaterial
              name="clock-time-four-outline"
              size={15}
              color={redColor}
            />
            <StatusText>Belum Bayar</StatusText>
          </OrderStatus>
        </Body>
        <Action>
          <View>
            <Items>1 Items</Items>
            <Price>Rp. 19.000</Price>
          </View>
          <ButtonComponent
            title="Konfirmasi Pembayaran"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            type="primary"
          />
        </Action>
      </Card>
      <Card>
        <Head>
          <View>
            <OrderNumber>#FCM000</OrderNumber>
            <Time>10:46 WIB</Time>
          </View>
          <CustomerTable>
            <TextMeja>Meja</TextMeja>
            <NomorMeja>Meja 01</NomorMeja>
          </CustomerTable>
        </Head>
        <Body>
          <CustomerName>Muhammad Al-Pandi</CustomerName>
          <OrderStatus>
            <IconMaterial
              name="clock-time-four-outline"
              size={15}
              color={redColor}
            />
            <StatusText>Belum Bayar</StatusText>
          </OrderStatus>
        </Body>
        <Action>
          <View>
            <Items>1 Items</Items>
            <Price>Rp. 19.000</Price>
          </View>
          <ButtonComponent
            title="Konfirmasi Pembayaran"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            type="secondary"
          />
        </Action>
      </Card>
    </Wrapper>
  );
};

export default ListOrder;

const Wrapper = styled.View`
  background-color: #efeeee;
  padding: 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
`;
const MainText = styled.Text`
  color: #a5a6a9;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 16px;
`;
const Card = styled.View`
  padding: 16px;
  color: #25424c;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 10px;
`;
const Head = styled.View`
  font-size: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Action = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
`;
const Body = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CustomerTable = styled.View`
  background: #efeeee;
  padding: 5px 16px;
  margin-left: 8px;
  align-items: center;
`;
const TextMeja = styled.Text`
  font-size: 10px;
  color: #a5a6a9;
  font-weight: 400;
`;
const NomorMeja = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;
const OrderNumber = styled.Text`
  color: ${primaryColor};
  font-weight: bold;
  font-size: 14px;
`;
const Time = styled.Text`
  font-size: 12px;
`;
const CustomerName = styled.Text`
  font-size: 14px;
  font-weight: 700;
  width: 170px;
`;
const OrderStatus = styled.View`
  font-weight: 600;
  flex-direction: row;
  align-items: center;
  font-size: 10px;
`;
const StatusText = styled.Text`
  font-size: 12px;
  margin-left: 5px;
  color: ${redColor};
`;
const Items = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;
const Price = styled.Text`
  font-size: 12px;
  font-weight: 700;
`;
