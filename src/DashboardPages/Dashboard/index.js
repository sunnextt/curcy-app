import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TradeHistory from './Overviews/TradeHistory';
import TransactionGraph from './Overviews/TransactionGraph';
import WalletBalance from './Overviews/WalletBalance';
import { useMediaQuery } from 'usehooks-ts';
import { useSelector } from 'react-redux';

const initialState = {};
const DashboardPage = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const { user: currentUser } = useSelector(state => state.auth);
  const { trade: UsertradeData } = useSelector(state => state.trade);

  const [tradeData, setTradeData] = useState(initialState);
  const [data, setData] = useState('');

  useEffect(() => {
    if (currentUser) {
      setData(currentUser.data);
    }

    if (UsertradeData) {
      setTradeData(UsertradeData);
    }
  }, [UsertradeData, currentUser, tradeData]);


  return (
    <>
      <Row>
        <Col span={24}>
          <WalletBalance data={data} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TradeHistory data={data} matches={matches} tradeData={tradeData} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TransactionGraph data={data} matches={matches} tradeData={tradeData} />
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
