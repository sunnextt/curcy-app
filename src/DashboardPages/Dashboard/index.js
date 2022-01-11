import { Col, Row } from 'antd';
import React from 'react';
import TradeHistory from './Overviews/TradeHistory';
import TransactionGraph from './Overviews/TransactionGraph';
import WalletBalance from './Overviews/WalletBalance';
import { useMediaQuery } from 'usehooks-ts';

const DashboardPage = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Row>
        <Col span={24}>
          <WalletBalance />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TradeHistory matches={matches} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TransactionGraph matches={matches} />
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
