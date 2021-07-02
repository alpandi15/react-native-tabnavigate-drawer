import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {primaryColor, redColor} from '../../constant';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonComponent from '../../components/form/Button';
import {apiGetStandOrder} from '../../services/order';
import moment from 'moment';

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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await apiGetStandOrder({
        relationship: 1,
        sort: '-createdAt',
        keyword: null,
        limit: 10,
      });
      console.log('Order ', res);
      setLoading(false);
      if (res?.success) {
        setData(res?.data);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <MainText>Pesanan Masuk</MainText>
      {!loading &&
        data?.map(val => {
          return (
            <CardComponent
              key={val?.uuid}
              nameCustomer={val?.nameCustomer}
              createdAt={moment(val?.createdAt).format('HH:mm A')}
              tableNumber={val?.tableNumber}
              qty={2}
              totalPrice={val?.totalPrice}
            />
          );
        })}
    </Wrapper>
  );
};

export default ListOrder;

const CardComponent = ({
  invoiceId,
  createdAt,
  tableNumber,
  nameCustomer,
  isPaid,
  qty,
  totalPrice,
}) => {
  return (
    <Card>
      <Head>
        <View>
          <OrderNumber>{invoiceId}</OrderNumber>
          <Time>{createdAt}</Time>
        </View>
        <CustomerTable>
          <TextMeja>Meja</TextMeja>
          <NomorMeja>{tableNumber}</NomorMeja>
        </CustomerTable>
      </Head>
      <Body>
        <CustomerName>{nameCustomer}</CustomerName>
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
          <Items>{`${qty} Items`}</Items>
          <Price>{totalPrice}</Price>
        </View>
        <ButtonComponent
          title="Konfirmasi Pembayaran"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          type="primary"
        />
      </Action>
    </Card>
  );
};

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
