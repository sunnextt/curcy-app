import React from 'react';
import { Col, Row } from 'antd';
import TradeHistoryWrapper, { Card, Button } from './styled';
import HistoryTable from './HistoryTable';
import CoinConverter from '../CoinConverter';

const TradeHistory = ({ matches }) => {
  return (
    <TradeHistoryWrapper>
      <Row gutter={[0, 24]}>
        <Col xs={24} sm={24} md={24} lg={15} style={{ paddingRight: matches && '30px' }}>
          <Card style={{ width: '100%', background: '#EAEFFA', borderRadius: '16px' }}>
            <div className="card_title">
              <h5>Trade History</h5>
              <Button type="link">view more </Button>
            </div>
            <div className="table_contents">
              <HistoryTable />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={18} md={14} lg={9}>
          <CoinConverter />
        </Col>
      </Row>
    </TradeHistoryWrapper>
  );
};

export default TradeHistory;
