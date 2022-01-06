import { Col, Row } from 'antd';
import React from 'react';
import TradeHistory from './Overviews/TradeHistory';
import TransactionGraph from './Overviews/TransactionGraph';
import WalletBalance from './Overviews/WalletBalance';

const DashboardPage = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <WalletBalance />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TradeHistory />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TransactionGraph />
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
