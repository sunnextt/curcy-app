import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TradeHistory from './Overviews/TradeHistory';
import TransactionGraph from './Overviews/TransactionGraph';
import WalletBalance from './Overviews/WalletBalance';
import { useMediaQuery } from 'usehooks-ts';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const matches = useMediaQuery('(min-width: 768px)');
  const { user: currentUser } = useSelector(state => state.auth);

  const [data, setData] = useState('');

  useEffect(() => {
    if (currentUser) {
      setData(currentUser.data);
    }
  }, [currentUser]);

  return (
    <>
      <Row>
        <Col span={24}>
          <WalletBalance data={data} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TradeHistory data={data} matches={matches} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TransactionGraph data={data} matches={matches} />
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
